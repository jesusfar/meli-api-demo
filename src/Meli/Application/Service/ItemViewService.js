class ItemViewService {
  constructor({ itemRepository }) {
    this.itemRepository = itemRepository;
  }

  execute(itemId) {
    const itemPromise = new Promise((resolve, reject) => {
      this.itemRepository
        .getItemById(itemId)
        .then((item) => {
          const response = this.dataTransform(item);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return itemPromise;
  }

  dataTransform(item) {
    const itemData = {
      id: item.getId,
      title: item.getTitle,
      price: item.getPrice,
      picture: item.getPicture,
      condition: item.getCondition,
      free_shipping: item.getFreeShipping,
      sold_quantity: item.getSoldQuantity,
      description: item.getDescription
    }

    const response = {
      author: {
        name: 'Jesus',
        lastName: 'Farfan'
      },
      item: itemData
    }

    return response;
  }
}

module.exports = ItemViewService;
