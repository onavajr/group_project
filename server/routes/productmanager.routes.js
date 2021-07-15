const ProductManagerController = require('../controllers/productmanager.controller');
module.exports = function(app){
    app.get('/api', ProductManagerController.productmanager);
    app.post('/api/productmanager', ProductManagerController.createProductManager);
}