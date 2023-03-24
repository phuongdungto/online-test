import { AppDataSource } from "../core/database";
import { TestDetail } from "./tesdetails.entity";
import { BadRequest, Unauthorized, NotFound } from 'http-errors';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import * as dotenv from "dotenv";
import { In } from "typeorm";
import { pagination } from "../core/interfaces/pagination.interface";
import { Pagination } from "../core/utils/pagination.util";
import * as fs from 'fs/promises'
import * as path from 'path';
import { TypeTest } from "../core/enum";
const WordExtractor = require("word-extractor");

const TEMPLATE_DIR = '../../public/filesQandA'


const testDetailRepo = AppDataSource.getRepository(TestDetail);


export async function createTestDetails(value: any) {
    const testDetails = value.testDetails.map(testdetails => ({
        ...testdetails,
        testId: value.testId
    }))
    console.log(testDetails);
    // await AppDataSource.createQueryBuilder()
    //     .insert().into(testDetails)
    //     .values(testDetails).execute();
}
