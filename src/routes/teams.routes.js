const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/teams.controller');

router.get('/add-team' , (req, res) => {
    res.render('links/team/team');
});

router.post('/post-team', teamsController.postTeam);

router.get('/', teamsController.getListTeam);

router.get('/delete-team/:id', teamsController.deleteTeam);

router.get('/edit-team/:id', teamsController.getTeam);

router.post('/edit-team/:id', teamsController.updateTeam);

module.exports = router;