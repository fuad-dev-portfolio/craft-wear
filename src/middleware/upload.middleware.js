import multer from 'multer'
import fs from 'fs'
import path from 'path'

const uploadPath = 'uploads/products';

if(!fs.existsSync(uploadPath)){
    fs.mkdirSync(uploadPath, {recursive:true})
};

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, uploadPath)
    },
    filename: (req,file,cb) => {
        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9)
        cb(null, uniqueName + path.extname(file.originalname))
    }
});

const fileFilter = (req,file,cb) => {
    if(file.mimetype.startsWith('image/')){
        cb(null,true)
    }else{
        cb(new Error("Only image files are allowed"), false)
    }
};

export const uploadProductImage = multer({
    storage,
    fileFilter
})