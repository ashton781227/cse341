const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Cailyn Pieterse');
});
routes.use('/contacts', require('./contacts'))

module.exports = routes;