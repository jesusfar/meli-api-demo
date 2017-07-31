const { Item, Price } = require('../../../Domain/Item');

class MeliItemRepository {
  constructor({ meliClientService }) {
    this.meliClientService = meliClientService;
  }

  getItemById(itemId) {
    return new Promise((resolve, reject) => {

      this.meliClientService.getItemById(itemId)
        .then((data) => {
          let price = new Price(data.currency_id, data.price, 2);
          let item = new Item(
            data.id,
            data.category_id,
            data.seller_id,
            data.title,
            price,
            data.pictures[0].url,
            data.condition,
            data.shipping.free_shipping,
            data.sold_quantity
          );
          resolve(item);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

module.exports = MeliItemRepository;
