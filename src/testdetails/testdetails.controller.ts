import * as Joi from "joi";
import { Request, Response, NextFunction } from 'express';
import { validate } from "../core/utils/validate.util";
import * as testDetailsService from "./testdetails.service";
import { Roles, TypeTest } from "../core/enum";
import { pagination } from "../core/interfaces/pagination.interface";

export async function createTestDetails(req: Request, res: Response, next: NextFunction) {
    try {
        const schema = Joi.object({
            testId: Joi.number().required(),
            testDetails: Joi.array().items({
                userId: Joi.number().required(),
                testId: Joi.number().required(),
                question: Joi.string().required(),
                answer: Joi.string().required(),
            }).min(1).required(),
        })
        const value = validate(req.body, schema);
        const result = await testDetailsService.createTestDetails(value);
        return res.status(200).send();
    } catch (error) {
        return next(error);
    }
}