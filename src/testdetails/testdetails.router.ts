import * as express from 'express';
import { Roles } from '../core/enum';
import {
    compareTestDetails,
    createTestDetails
} from './testdetails.controller';
import { productImageUpload } from '../core/static/file.static';
import { authorization } from '../core/middleware/auth.middleware';

const router = express.Router();

router.post('/', createTestDetails);
router.get('/', compareTestDetails)

export default router;