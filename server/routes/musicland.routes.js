const MusiclandController = require('../controllers/musicland.controller');
const {authenticate} = require('../config/jwt.config');
module.exports = function(app){
    app.get('/api/musicland', MusiclandController.getAllMusicland);
    app.post('/api/musicland/new', authenticate, MusiclandController.createMusicland);
    app.get('/api/musicland/:id', MusiclandController.getOneMusicland);
    app.put('/api/musicland/:id', MusiclandController.updateMusicland);
    app.delete('/api/musicland/:id', MusiclandController.deleteMusicland);
    app.get('/api/musicland/concertpage', MusiclandController.getAllMusicland);
}