const app = require('./server');
const models = require('./models');

const port = 3001;

models.sequelize.sync()
  .then(() => {
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
  })
  .catch((err) => console.log(err));