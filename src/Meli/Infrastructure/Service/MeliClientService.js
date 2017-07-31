class MeliClientService {
  constructor({ config }) {
    this.request = require('request');
    this.config = config;
    this.baseUrl = config.services.meli.baseUrl;
  }

  searchOnSiteByQuery(query, site='MLA', offset=0, limit=4) {
    return new Promise((resolve, reject) => {
      let uri = `${this.baseUrl}/sites/${site}/search?q=${query}&offset=${offset}&limit=${limit}`;

      this.request(uri, (error, response, body) => {
        if (error) {
          return reject(error);
        }
        return resolve(JSON.parse(body));
      });
    });
  }

  getItemById(itemId) {
    return new Promise((resolve, reject) => {
      let uri = `${this.baseUrl}/items/${itemId}`;

      this.request(uri, (error, response, body) => {
        if (error) {
          return reject(error);
        }
        return resolve(JSON.parse(body));
      });
    });
  }

  getItemDescriptionById(itemId) {
    return new Promise((resolve, reject) => {
      let uri = `${this.baseUrl}/items/${itemId}/description`;

      this.request(uri, (error, response, body) => {
        if (error) {
          return reject(error);
        }
        return resolve(JSON.parse(body));
      });
    });
  }

  getUserById(userId) {
    return new Promise((resolve, reject) => {
      let uri = `${this.baseUrl}/users/${userId}`;

      this.request(uri, (error, response, body) => {
        if (error) {
          return reject(error);
        }
        return resolve(JSON.parse(body));
      });
    });
  }

  getCategoryById(categoryId) {
    return new Promise((resolve, reject) => {
      let uri = `${this.baseUrl}/categories/${categoryId}`;

      this.request(uri, (error, response, body) => {
        if (error) {
          return reject(error);
        }
        return resolve(JSON.parse(body));
      });
    });
  }
}

module.exports = MeliClientService;
