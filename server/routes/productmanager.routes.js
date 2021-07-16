const ProductmanagerController = require('../controllers/productmanager.controller');
module.exports = function(app){
    app.get('/api/productmanager', ProductmanagerController.getAllProductmanager);
    app.post('/api/productmanager/new', ProductmanagerController.createProductmanager);
    app.get('/api/productmanager/:id', ProductmanagerController.getOneProductmanager);
    app.put('/api/productmanager/:id', ProductmanagerController.updateProductmanager);
    app.delete('/api/productmanager/:id', ProductmanagerController.deleteProductmanager);
}