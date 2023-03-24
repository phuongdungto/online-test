import { DataSource } from "typeorm";
import * as path from "path";
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { User } from "../users/user.entity";
import { Test } from "../tests/test.entity";
import { TestDetail } from "../testdetails/tesdetails.entity";
import { Mark } from "../marks/mark.entity";
import { init1679655691056 } from "../migrations/1679655691056-init";
import { updateTest1679657689109 } from "../migrations/1679657689109-update-test";
import { updateUser1679677528800 } from "../migrations/1679677528800-updateUser";
import { updateTest1679681281166 } from "../migrations/1679681281166-update-test";
import { createClasses1679681823172 } from "../migrations/1679681823172-createClasses";
import { updateClass1679685396577 } from "../migrations/1679685396577-update-Class";
import * as dotenv from "dotenv";
import { Class } from "../classes/classes.entity";
dotenv.config();

console.log(path.resolve('src/**/*.entity.ts'));

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User, Test, TestDetail, Mark, Class],
    //entities: [path.resolve('src/**/*.entity.ts')],
    subscribers: [],
    migrations: [init1679655691056, updateTest1679657689109, updateUser1679677528800,
        updateTest1679681281166, createClasses1679681823172, updateClass1679685396577],
    //migrations: [path.join(__dirname, "../migrations/*{.js,.ts}")],
    namingStrategy: new SnakeNamingStrategy(),
    synchronize: false,
    logging: true
})