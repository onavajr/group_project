const ProductmanagerController = require('../controllers/productmanager.controller');
const {authenticate} = require('../config/jwt.config');
module.exports = function(app){
    app.get('/api/productmanager', ProductmanagerController.getAllProductmanager);
    app.post('/api/productmanager/new', authenticate, ProductmanagerController.createProductmanager);
    app.get('/api/productmanager/:id', ProductmanagerController.getOneProductmanager);
    app.put('/api/productmanager/:id', ProductmanagerController.updateProductmanager);
    app.delete('/api/productmanager/:id', ProductmanagerController.deleteProductmanager);
}