const express = require('express');

class Server {
  constructor({ config, router }) {
    this.config = config;
    this.express = express();

    this.express.use(router);
  }

  start() {
    return new Promise((resolve, reject) => {
      const http = this.express
        .listen(this.config.api.port, () => {
          const { port } = http.address();
          console.log('Listening in port %s', port);
          resolve();
        })
    });
  }
}

module.exports = Server;
