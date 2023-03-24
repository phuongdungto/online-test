import * as Joi from "joi";
import { Request, Response, NextFunction } from 'express';
import { validate } from "../core/utils/validate.util";
import * as userService from "./user.service";
import { AddUserProjectDTO, AddUserTaskDTO, CreateUserDTO, LoginDTO } from "./user.dto";
import { Roles } from "../core/enum";
import { pagination } from "../core/interfaces/pagination.interface";

export async function signup(req: Request, res: Response, next: NextFunction) {
    try {
        const schema = Joi.object({
            fullname: Joi.string(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required()
        })
        const value = validate<CreateUserDTO>(req.body, schema);
        const result = await userService.signup(value);
        return res.status(201).send(result);
    } catch (error) {
        return next(error);
    }
}
export async function signin(req: Request, res: Response, next: NextFunction) {
    try {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required()
        })
        const value = validate<LoginDTO>(req.body, schema);
        const result = await userService.signin(value);
        return res.status(200).send(result);
    } catch (error) {
        return next(error);
    }
}

export async function createUser(req: Request, res: Response, next: NextFunction) {
    try {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
            fullname: Joi.string().max(255).required(),
            birthDay: Joi.date(),
            numberPhone: Joi.string().min(10).max(11),
            role: Joi.string().default(Roles.STUDENT),
        });

        const value = validate<CreateUserDTO>(req.body, schema);

        const result = await userService.createUser(value)
        return res.status(201).send(result);

    } catch (error) {
        return next(error);
    }
}

