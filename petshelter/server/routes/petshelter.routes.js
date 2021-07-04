const PetshelterController = require('../controllers/petshelter.controller');
module.exports = function(app){
    app.get('/api/petshelter', PetshelterController.getAllPetshelter);
    app.post('/api/petshelter/new', PetshelterController.createPetshelter);
    app.get('/api/petshelter/:id', PetshelterController.getOnePetshelter);
    app.put('/api/petshelter/:id', PetshelterController.updatePetshelter);
    app.delete('/api/petshelter/:id', PetshelterController.deletePetshelter);
}