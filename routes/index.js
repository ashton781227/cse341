const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Cailyn Pieterse');
});

module.exports = routes;