const express = require('express');
const router = express.Router();
const matchesController = require('../controllers/matches.controller');

router.get('/add-match' , (req, res) => {
    res.render('links/match/match');
});

router.post('/post-match', matchesController.postMatch);

router.get('/', matchesController.getListMatch);

router.get('/delete-match/:id',matchesController.deleteMatch);

router.get('/edit-match/:id', matchesController.getMatch);

router.post('/edit-match/:id', matchesController.updateMatch);

module.exports = router;