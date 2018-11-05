import db from '../database/models';
import parser from '../database/config/cloudinary';

const product = db.Product;

/**
 * Class representing Products
 */
class ProductController {
  static createProduct (req, res) {
    const {
      Name,
      Description,
      Price,
      Category,
      Color,
      Image
    } = req.body;

    const image = {};
    image.url = Image.url;
    image.id = Image.public_id; 

    product.create({
      name: Name,
      description: Description,
      price: Price,
      category: Category,
      color: Color,
      image: Image
    }).then(newProduct => {
      return res.status(201).json({
        message: 'Success! Product has been created.',
        newProduct
      });
    }).catch(error => {
        console.log('>>>>', error);
      return res.status(500).json(error.message);
    });
  }
}

export default ProductController;