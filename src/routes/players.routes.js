const express = require('express');
const router = express.Router();
const playersController = require('../controllers/players.controller');

router.get('/add-player' , (req, res) => {
    res.render('links/player/player');
    
});


router.get('/', playersController.getListPlayers);

router.post('/post-player', playersController.postPlayer);

router.get('/delete-player/:id',  playersController.deletePlayer);

 router.get('/edit-player/:id' ,playersController.getPlayer);

router.post('/edit-player/:id', playersController.updatePlayer);

module.exports = router;