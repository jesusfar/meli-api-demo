class ItemSearchService {

  constructor({ siteRepository, itemRepository, categoryRepository }) {
    this.itemRepository = itemRepository;
    this.siteRepository = siteRepository;
    this.categoryRepository = categoryRepository;
  }

  execute(query) {
    const itemsPromise = new Promise((resolve, reject) => {
      this.siteRepository
        .searchOnSiteByQuery(query)
        .then((items) => {
          resolve(items);
        })
        .catch((error) => {
          reject(error);
        });
    });

    const categoriesPromise = new Promise((resolve, reject) => {
      itemsPromise
        .then((items) => {
          // I get the category Id from first element
          let categoryId = items[0].getCategoryId;

          this.categoryRepository
            .getCategoryById(categoryId)
            .then((category) => {
              resolve(category);
            })
            .catch((error) => {
              reject(error);
            });
        });
    });

    const resultPromise = Promise.all([itemsPromise, categoriesPromise])
      .then((results) => {

        let itemsResponse = results[0].map(this.itemDataTransform);
        let categoriesResponse = results[1].pathFromRoot.map(this.categoryDataTransform);

        return {
          author: {
            name: 'Jesus',
            lastName: 'Farfan'
          },
          categories: categoriesResponse,
          items: itemsResponse
        }
      });

      return resultPromise;
  }

  itemDataTransform(item) {

    let itemData = {
      id: item.getId,
      title: item.getTitle,
      price: item.getPrice,
      picture: item.getPicture,
      condition: item.getCondition,
      free_shipping: item.getFreeShipping
    }

    return itemData;
  }

  categoryDataTransform(categoryPathFromRoot) {
    return categoryPathFromRoot.name;
  }
}

module.exports = ItemSearchService;
