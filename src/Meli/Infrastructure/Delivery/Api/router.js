const { Router } = require('express');
const statusMonitor = require('express-status-monitor');
const cors = require('cors');
const compression = require('compression');
const methodOverride = require('method-override');
const { itemController } = require('./Controller');

module.exports = ({ config, containerMiddleware }) => {
  const router = Router();
  const apiRouter = Router();

  if (config.env === 'development') {
    router.use(statusMonitor());
  }

  apiRouter
    .use(methodOverride('X-HTTP-Method-Override'))
    .use(cors())
    .use(compression())
    .use(containerMiddleware);

  apiRouter.use('/items', itemController.router);

  router.use('/api', apiRouter);

  return router;
};
