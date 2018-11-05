import express from 'express';
import ProductController from './controller/createProduct';
import parser from './database/config/cloudinary';

const router = express.Router();

router.post('/product/create', parser.single('image'), ProductController.createProduct);


export default router;