const express = require('express');
const router = express.Router();
const dtsController = require('../controllers/dts.controller');

const pool = require('../config/database')
router.get('/add-dt' , (req, res) => {
    res.render('links/dt/dt');
});

router.post('/post-dt', dtsController.postDt);

router.get('/', dtsController.getListDts);

router.get('/delete-dt/:id', dtsController.deleteDt);

router.get('/edit-dt/:id', dtsController.getDt);

router.post('/edit-dt/:id', dtsController.updateDt);



module.exports = router;