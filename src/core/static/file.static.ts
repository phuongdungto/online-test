
import multer from 'multer';
import * as path from 'path';
import { BadRequest } from 'http-errors';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../../public/filesQandA'))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    },

})

function createMulter({ allowFileTypes, maxFileSize }) {
    return multer({
        storage: storage,
        fileFilter: function (req, file, cb) {
            if (maxFileSize && file.size >= maxFileSize) {
                cb(new BadRequest(`Only allow size less than ${maxFileSize / 1_000_000}`));
            }

            if (allowFileTypes) {
                // Check ext
                const extname = allowFileTypes.test(path.extname(file.originalname).toLowerCase());
                // Check mimetype
                const mimetype = allowFileTypes.test(file.mimetype);

                if (mimetype && extname) {
                    return cb(null, true);
                } else {
                    cb(new BadRequest('Only allow images'));
                }
            }

        }
    });
}

export const productImageUpload = createMulter({ allowFileTypes: /doc|docx|txt/, maxFileSize: 10_000_000_000 })