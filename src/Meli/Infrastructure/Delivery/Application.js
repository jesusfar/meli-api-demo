class Application {
  constructor({ server }) {
    this.server = server;
  }

  run() {
    return Promise.resolve()
      .then(() => this.server.start());
  }

}

module.exports = Application;
