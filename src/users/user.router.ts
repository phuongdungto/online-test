import * as express from 'express';
import { Roles } from '../core/enum';
import {
    signup,
    signin,
    createUser
} from './user.controller';
import { authorization } from '../core/middleware/auth.middleware';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/create', createUser);

export default router;