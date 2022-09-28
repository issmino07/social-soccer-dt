const express = require('express');
const router = express.Router();
const playersController = require('../controllers/players.controller');

const pool = require('../config/database')
//DIRECTOR TECNICO//
router.get('/add' , (req, res) => {
    res.render('links/dt');
    
 //JUGADOR//   
});
router.get('/add-player' , (req, res) => {
    res.render('links/player');
    
//PARTIDO
});
router.get('/add-game' , (req, res) => {
    res.render('links/game');
    
//DIRECTOR TECNICO
});
router.post('/dt', async (req, res) => {
    const { nombre_DT, equipo_DT, edad_DT, valoracion_DT } = req.body;
    const newLink = {
        name_DT,
        team_DT,
        age_DT,
        valoration_DT 

    };
    
    await pool.query('INSERT INTO dt set ?', [newLink]);
    req.flash('success', 'CREADO CORRECTAMENTE');
    res.redirect('/links')
});
router.get('/', async (req, res) => {
    const dt = await pool.query('SELECT *FROM dt');
    console.log(dt)
    res.render('links/list', { dt });
})
router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM dt WHERE ID = ?', [id]);
    req.flash('success', 'ELIMINADO CORRECTAMENTE');
    res.redirect('/links');
 });
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
//JUGADOR
router.post('/post-player', async (req, res) => {
    const { name_Player, surname_Player, age_Player, player_Valuation } = req.body;
    const newLink = {
        name_Player,
        surname_Player,
        age_Player,
        player_Valuation 

    };
    
    await pool.query('INSERT INTO player set ?', [newLink]);
    req.flash('success', 'PLAYER CREADO CORRECTAMENTE');
    res.redirect('/links/list-player')
});
router.get('/list-player', playersController.getListPlayers);

router.get('/delete-player/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM player WHERE ID = ?', [id]);
    req.flash('success', 'PLAYER ELIMINADO CORRECTAMENTE');
    res.redirect('/links/list-player');
 });
 router.get('/edit-player/:id', async (req, res) => {
    const { id } = req.params;
    const player = await pool.query('SELECT * FROM player WHERE id = ?', [id]);
    res.render('links/edit-player', {player: player[0]});
});
router.post('/edit-player/:id', async (req, res) => {
    const { id } = req.params;
    const { name_player, surname_player, age_player, player_Valuation } = req.body;
    const newLink = {
        name_player,
        surname_player,
        age_player,
        player_Valuation
    };
    await pool.query('UPDATE player set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'PLAYER EDITADO CORRECTAMENTE')
    res.redirect('/links/list-player');
    
});
//PARTIDO
router.post('/post-game', async (req, res) => {
    const { place_game, game_time, Date_game } = req.body;
    const newLink = {
        place_game,
        game_time,
        Date_game

    };
    
    await pool.query('INSERT INTO game set ?', [newLink]);
    req.flash('success', 'GAME CORRECTAMENTE');
    res.redirect('/links/list-game')
});



router.get('/list-game', async (req, res) => {
    const game = await pool.query('SELECT *FROM game');
    console.log(game)
    res.render('links/list-game', { game });
})



 router.get('/delete-game/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM game WHERE ID = ?', [id]);
    req.flash('success', 'GAME ELIMINADO CORRECTAMENTE');
    res.redirect('/links/list-game');
 });



router.get('/edit-game/:id', async (req, res) => {
    const { id } = req.params;
    const game = await pool.query('SELECT * FROM game WHERE id = ?', [id]);
    res.render('links/edit-game', {game: game[0]});
});



router.post('/edit-game/:id', async (req, res) => {
    const { id } = req.params;
    const { place_Match, match_time, Date_Match } = req.body;
    const newLink = {
        place_Match,
        match_time,
        Date_Match
    };
    await pool.query('UPDATE game set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'GAME EDITADO CORRECTAMENTE')
    res.redirect('/links/list-game');
    
});


module.exports = router;