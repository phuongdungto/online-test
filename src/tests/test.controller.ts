import * as Joi from "joi";
import { Request, Response, NextFunction } from 'express';
import { validate } from "../core/utils/validate.util";
import * as testService from "./test.service";
import { } from "./test.dto";
import { Roles, TypeTest } from "../core/enum";
import { pagination } from "../core/interfaces/pagination.interface";

export async function createTest(req: Request, res: Response, next: NextFunction) {
    try {
        const schema = Joi.object({
            files: Joi.array().required().min(2).max(2),
            name: Joi.string().required(),
            type: Joi.string().valid(...Object.values(TypeTest))
        })

        const { files, ...value } = validate({
            ...req.body,
            files: Array.isArray(req.files) && req.files.map(file => file.filename)
        }, schema);
        console.log(files);
        const result = await testService.createTest({
            ...value,
            questionUrl: files[0],
            answerUrl: files[1],
        })
        return res.status(201).send(result);
    } catch (error) {
        return next(error);
    }
}

export async function getTest(req: Request, res: Response, next: NextFunction) {
    try {

    } catch (error) {

    }
}