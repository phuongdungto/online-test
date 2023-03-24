import * as Joi from "joi";
import { Request, Response, NextFunction } from 'express';
import { validate } from "../core/utils/validate.util";
import * as markService from "./mark.service";
import { pagination } from "../core/interfaces/pagination.interface";
