require('dotenv').load();

const path = require('path');

const ENV = process.env.NODE_EVN || 'development';

const envConfig = require(path.join(__dirname, 'env', ENV));

const config = Object.assign({
  [ENV]: true,
  env: ENV
}, envConfig);

module.exports = config;
