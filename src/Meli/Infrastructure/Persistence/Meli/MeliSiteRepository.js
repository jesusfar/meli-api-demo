const { Item, Price } = require('../../../Domain/Item');

class MeliSiteRepository {
  constructor({ meliClientService }) {
    this.meliClientService = meliClientService;
  }

  searchOnSiteByQuery(query) {
    return new Promise((resolve, reject) => {
      this.meliClientService.searchOnSiteByQuery(query)
        .then((data) => {
          let items = data.results.map(this.dataMapping);

          resolve(items);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  dataMapping(itemData) {
    let price = new Price(
      itemData.currency_id,
      itemData.price,
      2
    );

    let item = new Item(
      itemData.id,
      itemData.category_id,
      itemData.seller.id,
      itemData.title,
      price,
      itemData.thumbnail,
      itemData.condition,
      itemData.shipping.free_shipping,
      itemData.sold_quantity,
      null
    );

    return item;
  }
}

module.exports = MeliSiteRepository;

