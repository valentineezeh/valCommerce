'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserInputValidation = function () {
  function UserInputValidation() {
    _classCallCheck(this, UserInputValidation);
  }

  _createClass(UserInputValidation, null, [{
    key: 'createProduct',
    value: function createProduct(req, res, next) {
      var errors = [];
      if (req.body.Name == undefined) {
        errors.push('Name is required');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.Name === '') {
        errors.push('Name cannot be empty');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.Name.length <= 1) {
        errors.push('Length of the name should be greater than 1 character..');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.Description == undefined) {
        errors.push('Name is required');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.Description == '') {
        errors.push('Last name cannot be empty');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.Description.length <= 1) {
        errors.push('Length of the description should be greater than 1 character..');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.Price == undefined) {
        errors.push('Valid Price required...');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.Price == '') {
        errors.push('Last name cannot be empty');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.Price.length <= 2) {
        errors.push('Price must exceed 2 characters..');
        return res.status(400).send({
          status: 'Errors',
          message: errors
        });
      }
      if (req.body.Category == undefined) {
        errors.push('Valid Category required...');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.Category == '') {
        errors.push('Category cannot be empty');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.Category.length <= 2) {
        errors.push('Category must exceed 2 characters..');
        return res.status(400).send({
          status: 'Errors',
          message: errors
        });
      }
      if (req.body.Color == undefined) {
        errors.push('Valid Color required...');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.Color == '') {
        errors.push('Color cannot be empty');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.Color.length <= 2) {
        errors.push('Color must exceed 2 characters..');
        return res.status(400).send({
          status: 'Errors',
          message: errors
        });
      }
      if (req.body.Image == undefined) {
        errors.push('This field is required...');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.Image == '') {
        errors.push('Image cannot be empty');
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      if (req.body.Image.length <= 2) {
        errors.push('Image must exceed 2 characters..');
        return res.status(400).send({
          status: 'Errors',
          message: errors
        });
      }
      if (errors.length > 0) {
        return res.status(400).send({
          status: 'Error',
          message: errors
        });
      }
      return next();
    }
  }]);

  return UserInputValidation;
}();

exports.default = UserInputValidation;