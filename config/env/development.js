const path = require('path');

const logPath = path.join(__dirname, '../var/logs/development.logs');

config = {
  api: {
    host: '0.0.0.0',
    port: 3000
  },
  services: {
    meli: {
      baseUrl: 'https://api.mercadolibre.com'
    }
  }
}

module.exports = config;
