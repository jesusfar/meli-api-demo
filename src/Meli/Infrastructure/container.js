const { createContainer, Lifetime } = require('awilix');
const { scopePerRequest } = require('awilix-express');

const config = require('../../../config');
const Application = require('./Delivery/Application');
const router = require('./Delivery/Api/router');
const Server = require('./Delivery/Api/Server');

const { ItemSearchService, ItemViewService } = require('../Application/Service');
const { MeliSiteRepository, MeliItemRepository, MeliCategoryRepository }= require('./Persistence/Meli');
const MeliClientService = require('./Service/MeliClientService');
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

// Middlewares
container
  .registerValue({
    containerMiddleware: scopePerRequest(container)
  });

// Repositories

container
  .registerClass({
    siteRepository: [ MeliSiteRepository, { lifetime: Lifetime.SINGLETON }],
    itemRepository: [ MeliItemRepository, { lifetime: Lifetime.SINGLETON }],
    categoryRepository: [ MeliCategoryRepository, { lifetime: Lifetime.SINGLETON }],
  });

// Application Services
container
  .registerClass({
    itemSearchService: ItemSearchService,
    itemViewService: ItemViewService
  });

// Infrastructure Services
container
  .registerClass({
    meliClientService: MeliClientService
  });

module.exports = container;
