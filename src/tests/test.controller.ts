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
            type: Joi.string().valid(...Object.values(TypeTest)),
            startDate: Joi.date().required(),
            time: Joi.number().required(),
            teacherId: Joi.number().required(),
            classId: Joi.number().required(),
        })

        const { files, ...value } = validate({
            ...req.body,
            files: Array.isArray(req.files) && req.files.map(file => file.filename)
        }, schema);
        console.log(files);
        const result = await testService.createTest({
            ...value,
            questionUrl: files[1],
            answerUrl: files[0],
        })
        return res.status(201).send(result);
    } catch (error) {
        return next(error);
    }
}

export async function getTest(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await testService.getTest(+req.params.id);
        return res.status(200).send(result)
    } catch (error) {
        return next(error);
    }
}

export async function getTests(req: Request, res: Response, next: NextFunction) {
    try {
        const schema = Joi.object({
            page: Joi.number().default(1),
            limit: Joi.number().default(5),
            sort: Joi.string().allow(''),
            sortBy: Joi.object().valid(...Object.values(['asc', 'desc'])).allow(''),
            name: Joi.string().allow(''),
            teacherId: Joi.number().allow(''),
            classId: Joi.number().allow('')
        });
        const value = validate(req.query, schema);
        const result = await testService.getTests(value);
        return res.status(200).send(result);
    } catch (error) {
        return next(error);
    }
}
