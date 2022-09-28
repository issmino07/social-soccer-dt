const express = require('express');
const router = express.Router();
const playersController = require('../controllers/players.controller');
const dtsController = require('../controllers/dts.controller');

const pool = require('../config/database')

router.post('/dt', dtsController.postDt);

router.get('/', dtsController.getListDts);

router.get('/delete/:id', dtsController.deleteDt);
 router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const dt = await pool.query('SELECT * FROM dt WHERE id = ?', [id]);
    res.render('links/edit', {dt: dt[0]});
});
router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre_DT, equipo_DT, edad_DT, valoracion_DT } = req.body;
    const newLink = {
        name_DT,
        team_DT,
        age_DT,
        valoration_DT
    };
    await pool.query('UPDATE dt set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'EDITADO CORRECTAMENTE')
    res.redirect('/links');
    
});

module.exports = router;