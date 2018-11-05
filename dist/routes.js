'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _createProduct = require('./controller/createProduct');

var _createProduct2 = _interopRequireDefault(_createProduct);

var _userInputValidate = require('./middleware/userInputValidate');

var _userInputValidate2 = _interopRequireDefault(_userInputValidate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/product/create', _userInputValidate2.default.createProduct, _createProduct2.default.createProduct);

exports.default = router;