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
import { Test } from "../tests/test.entity";
import { count } from "console";
import { Mark } from "../marks/mark.entity";
const WordExtractor = require("word-extractor");

const TEMPLATE_DIR = '../../public/filesQandA'


const testDetailRepo = AppDataSource.getRepository(TestDetail);
const testRepo = AppDataSource.getRepository(Test);
const markRepo = AppDataSource.getRepository(Mark)

export async function createTestDetails(value: any) {
    const testDetails = value.testDetails.map(testdetails => ({
        ...testdetails,
        testId: value.testId
    }))
    console.log(testDetails);
    await AppDataSource.createQueryBuilder()
        .insert().into(TestDetail)
        .values(testDetails).execute();
}

export async function compareTestDetails(value) {
    const [list, count] = await testDetailRepo.findAndCount({
        where: {
            testId: value.testId,
            userId: value.userId
        },
        select: ['question', 'answer']
    })
    const test = await testRepo.findOneBy({ id: value.testId })
    const extractor = new WordExtractor();
    const extracted = extractor.extract(path.join(__dirname, TEMPLATE_DIR, test.answerUrl));

    const { mark, scd } = await extracted.then(function (doc) {
        const lines1 = doc.getBody() as string;
        const arr = [];
        for (let i = 1; i <= count; i++) {
            arr.push(lines1.indexOf(i + '. '))
        }
        const arr1 = [];
        for (let i = 0; i < arr.length - 1; i++) {
            arr1.push(lines1.substring(arr[i], arr[i + 1]).trim())
        }
        arr1.push(lines1.substring(arr[arr.length - 1]).trim())
        let j = 0;
        let mark = 0;
        let scd = 0;
        for (let i = 0; i < arr1.length - 1; i++) {
            if (i > 10) { j++ }
            //console.log(i)
            list.map(testDetail => {
                if (testDetail.question == arr1[i][j]) {
                    if (testDetail.answer == arr1[i][arr1[i].length - 1]) {
                        mark += 10 / arr1.length
                        scd++;
                    }
                    return;
                }
            })
        }


        return { mark, scd };
    });

    await markRepo.save({
        mark: mark,
        userId: value.userId,
        testId: value.testId
    })

    return { mark, scd, count }

}
