const express = require('express');
const router = express.Router();
const campsController = require('../controllers/camps.controller');

router.get('/add-camp' , (req, res) => {
    res.render('links/camp/camp');
});

router.post('/post-camp', campsController.postCamp);

router.get('/', campsController.getListCamp);

router.get('/delete-camp/:id', campsController.deleteCamp);

router.get('/edit-camp/:id', campsController.getCamp);

router.post('/edit-camp/:id', campsController.updateCamp);

module.exports = router;