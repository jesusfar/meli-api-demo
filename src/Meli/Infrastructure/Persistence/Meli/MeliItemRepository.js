const { Item, Price } = require('../../../Domain/Item');

class MeliItemRepository {
  constructor({ meliClientService }) {
    this.meliClientService = meliClientService;
  }

  getItemById(itemId) {
    const itemPromise = new Promise((resolve, reject) => {

      this.meliClientService.getItemById(itemId)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });

    const itemDescPromise = new Promise((resolve, reject) => {
      itemPromise
        .then((data) => {
          this.meliClientService.getItemDescriptionById(data.id)
            .then((dataDescription) => {
              resolve(dataDescription);
            })
            .catch((error) => {
              reject(error);
            });
        })
        .catch((error) => {
          reject(error)
        });
    });

    const result = Promise.all([
      itemPromise, itemDescPromise
    ])
      .then((results) => {
        let item = this.dataMapping(results[0], results[1]);
        return item;
      });

    return result;
  }

  dataMapping(dataItem, dataDescription) {
    let price = new Price(dataItem.currency_id, dataItem.price, 2);
    let item = new Item(
      dataItem.id,
      dataItem.category_id,
      dataItem.seller_id,
      dataItem.title,
      price,
      dataItem.pictures[0].url,
      dataItem.condition,
      dataItem.shipping.free_shipping,
      dataItem.sold_quantity,
      dataDescription.plain_text
    );

    return item;
  }
}

module.exports = MeliItemRepository;
