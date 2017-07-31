const { Router } = require('express');
const { inject } = require('awilix-express');

const itemController = {
  get router() {
    const router = Router();
    router.get('/', inject('itemSearchService'), this.itemSearchByQuery);
    router.get('/:itemId', inject('itemViewService'), this.itemById);

    return router;
  },

  itemSearchByQuery(req, res, next) {
    const { itemSearchService } = req;
    let query = req.query.q;

    itemSearchService
      .execute(query)
      .then((response) => {
        res.json(response);
      })
      .catch((error) => {
        console.log(error);
        res.status(error.status).end();
      });
  },

  itemById(req, res, next) {
    const { itemViewService } = req;
    let itemId = req.params.itemId;

    itemViewService
      .execute(itemId)
      .then((response) => {
        res.json(response);
      })
      .catch((error) => {
        console.log(error);
        res.status(error.status).end();
      });
  }
};

module.exports = itemController;
