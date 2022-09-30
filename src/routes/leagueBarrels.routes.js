const express = require('express');
const router = express.Router();
const leagueBarrialsController = require('../controllers/leagueBarrels.controller');

router.get('/add-leagueBarrel' , (req, res) => {
    res.render('links/leagueBarrel/leagueBarrel');
});

router.post('/post-leagueBarrel', leagueBarrialsController.postLeagueBarrel);

router.get('/', leagueBarrialsController.getListLeagueBarrel);

router.get('/delete-leagueBarrel/:id',leagueBarrialsController.deleteLeagueBarrel);

router.get('/edit-leagueBarrel/:id', leagueBarrialsController.getLeagueBarrel);

router.post('/edit-leagueBarrel/:id', leagueBarrialsController.updateLeagueBarrel);

module.exports = router;