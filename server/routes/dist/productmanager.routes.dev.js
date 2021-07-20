"use strict";

var ProductmanagerController = require('../controllers/productmanager.controller');

var _require = require('../config/jwt.config'),
    authenticate = _require.authenticate;

module.exports = function (app) {
  app.get('/api/productmanager', ProductmanagerController.getAllProductmanager);
  app.post('/api/productmanager/new', authenticate, ProductmanagerController.createProductmanager);
  app.get('/api/productmanager/:id', ProductmanagerController.getOneProductmanager);
  app.put('/api/productmanager/:id', ProductmanagerController.updateProductmanager);
  app["delete"]('/api/productmanager/:id', ProductmanagerController.deleteProductmanager);
};