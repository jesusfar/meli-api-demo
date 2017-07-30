const { Router } = require('express');
const statusMonitor = require('express-status-monitor');
const cors = require('cors');
const compression = require('compression');
const methodOverride = require('method-override');

module.exports = ({ config }) => {
  const router = Router();
  const apiRouter = Router();

  if (config.env === 'development') {
    router.use(statusMonitor());
  }

  apiRouter
    .use(methodOverride('X-HTTP-Method-Override'))
    .use(cors())
    .use(compression());

  apiRouter.get('/items', function (req, res) {
    // todo implement get all items
    res.send('Get all items');
  });

  apiRouter.get('/items/:id', function (req, res) {
    // todo implement get item by ID
    res.send('Get item by id: ' + req.params.id);
  });

  apiRouter.get('/items/:id/description', function (req, res) {
    // todo implement get item by ID
    res.send('Get item description by id: ' + req.params.id);
  });

  router.use('/api', apiRouter);

  return router;
};
