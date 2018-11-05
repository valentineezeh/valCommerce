'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Call express from a variable
var app = (0, _express2.default)();

// Setting Configurations
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.text());
app.use(_bodyParser2.default.json({ type: 'application/json' }));
app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.use(_express2.default.static(_path2.default.join(__dirname, '/client')));

// Connect all routes to application
app.use((0, _cors2.default)());
app.use('/api', _routes2.default);

app.get('*', function (req, res) {
  res.sendFile(_path2.default.resolve(__dirname, 'client', 'index.html'));
});

var port = +process.env.PORT || 3000;
app.set('port', port);

// Turn on the server
app.listen(port, function () {
  console.log('The server is listening on port ' + port);
});

exports.default = app;