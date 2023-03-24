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
import * as fs from 'fs/promises'
import * as path from 'path';
import { TypeTest } from "../core/enum";
const WordExtractor = require("word-extractor");

const TEMPLATE_DIR = '../../public/filesQandA'


const testRepo = AppDataSource.getRepository(Test);

export async function createTest(createTestDTO: createTestDTO) {
    const test = testRepo.save(createTestDTO);
    return test;
}

export async function getTest(testId: number) {
    const test = await testRepo.findOneBy({ id: testId });
    if (test.type === TypeTest.READING) {
        const extractor = new WordExtractor();
        const extracted = extractor.extract(path.join(__dirname, TEMPLATE_DIR, test.questionUrl));

        const { arrQ, arrRs } = await extracted.then(function (doc) {
            const lines1 = doc.getBody() as string;
            let lines2 = lines1.split('\n');
            let arrQ = [];
            let arrRs = [];
            let lines = [];
            let j = 0;
            let _json = {}
            for (let i = 0; i < lines2.length; i++) {
                if (lines2[i] != '') {
                    lines[j] = lines2[i];
                    j++;
                }
            }
            for (let i = 0; i < lines.length; i++) {
                let linestmp = lines[i].split('.');
                let tmp = parseInt(linestmp[0]);
                if (typeof tmp === 'number' && lines[i].startsWith(tmp + '. ')) {
                    arrQ.push(lines[i]);
                    _json = {}
                } else {
                    let A = lines[i].indexOf('A.')
                    let B = lines[i].indexOf('B.')
                    let C = lines[i].indexOf('C.')
                    let D = lines[i].indexOf('D.')
                    _json =
                    {
                        'A': lines[i].substring(A, B).trim(),
                        'B': lines[i].substring(B, C).trim(),
                        'C': lines[i].substring(C, D).trim(),
                        'D': lines[i].substring(D).trim()
                    }
                    arrRs.push(_json)
                }
            }
            return { arrQ, arrRs }
        });

        return { arrQ, arrRs }
    } else {
        const extractor = new WordExtractor();
        const extracted = extractor.extract(path.join(__dirname, TEMPLATE_DIR, test.questionUrl));

        const value = await extracted.then(function (doc) {
            const lines1 = doc.getBody() as string;

            return { lines1 }
        });

        console.log(value)
    }
}
