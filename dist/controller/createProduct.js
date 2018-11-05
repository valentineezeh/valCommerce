'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../database/models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var product = _models2.default.Product;

/**
 * Class representing Products
 */

var ProductController = function () {
  function ProductController() {
    _classCallCheck(this, ProductController);
  }

  _createClass(ProductController, null, [{
    key: 'createProduct',
    value: function createProduct(req, res) {
      var _req$body = req.body,
          Name = _req$body.Name,
          Description = _req$body.Description,
          Price = _req$body.Price,
          Category = _req$body.Category,
          Color = _req$body.Color,
          Image = _req$body.Image;


      product.create({
        name: Name,
        description: Description,
        price: Price,
        category: Category,
        color: Color,
        image: Image
      }).then(function (newProduct) {
        return res.status(201).json({
          message: 'Success! Product has been created.',
          newProduct: newProduct
        });
      }).catch(function (error) {
        return res.status(500).json(error.message);
      });
    }
  }]);

  return ProductController;
}();

exports.default = ProductController;