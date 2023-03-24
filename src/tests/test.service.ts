import { createTestDTO } from "./test.dto";
import { AppDataSource } from "../core/database";
import { Test } from "./test.entity";
import { BadRequest, Unauthorized, NotFound } from 'http-errors';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import * as dotenv from "dotenv";
import { In } from "typeorm";
import { pagination } from "../core/interfaces/pagination.interface";
import { Pagination } from "../core/utils/pagination.util";

const testRepo = AppDataSource.getRepository(Test);

export async function createTest(createTestDTO: createTestDTO) {
    const test = testRepo.save(createTestDTO);
    return test;
}