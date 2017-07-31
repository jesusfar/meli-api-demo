const { Category } = require('../../../Domain/Category');

class MeliCategoryRepository {
  constructor({ meliClientService }) {
    this.meliClientService = meliClientService;
  }

  getCategoryById(categoryId) {
    return new Promise((resolve, reject) => {

      this.meliClientService.getCategoryById(categoryId)
        .then((data) => {
          let category = new Category(
            data.id,
            data.name,
            data.picture,
            data.total_items_in_this_category,
            data.path_from_root
          );
          resolve(category);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

module.exports = MeliCategoryRepository;
