const container = require('./src/Meli/Infrastructure/container');

const app = container.resolve('app');

app
  .run()
  .catch((error) => {
    console.log(error.stack);
    process.exit();
  });
