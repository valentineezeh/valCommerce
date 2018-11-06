import express from 'express';
import ProductController from './controller/ProductController';
import UserInputValidation from './middleware/userInputValidate';

const router = express.Router();

router.post('/product/create', UserInputValidation.createProduct, ProductController.createProduct);

router.get('/product/', ProductController.getAllProducts);


export default router;