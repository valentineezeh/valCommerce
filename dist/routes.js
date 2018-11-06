'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ProductController = require('./controller/ProductController');

var _ProductController2 = _interopRequireDefault(_ProductController);

var _userInputValidate = require('./middleware/userInputValidate');

var _userInputValidate2 = _interopRequireDefault(_userInputValidate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/product/create', _userInputValidate2.default.createProduct, _ProductController2.default.createProduct);

router.get('/product/', _ProductController2.default.getAllProducts);

exports.default = router;