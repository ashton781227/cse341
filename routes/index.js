const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Ashton Pieterse');
});

module.exports = routes;