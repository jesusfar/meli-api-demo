const { createContainer, Lifetime } = require('awilix');
const { scopePerRequest } = require('awilix-express');

const config = require('../../../config');
const Application = require('./Delivery/Application');
const router = require('./Delivery/Http/router');
const Server = require('./Delivery/Http/Server');

const container = createContainer();

// Basic system
container
  .registerClass({
    app: [Application, { lifetime: Lifetime.SINGLETON }],
    server: [Server, { lifetime: Lifetime.SINGLETON}]
  })
  .registerFunction({
    router: [router, { lifetime: Lifetime.SINGLETON }]
  })
  .registerValue({ config });

module.exports = container;
