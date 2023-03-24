import * as express from 'express';
import { Roles } from '../core/enum';
import {
    createTest,
    getTest
} from './test.controller';
import { productImageUpload } from '../core/static/file.static';
import { authorization } from '../core/middleware/auth.middleware';

const router = express.Router();

router.post('/', productImageUpload.array('files', 2), createTest);
router.get('/:id', getTest);

export default router;