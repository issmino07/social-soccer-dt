const pool = require("../config/database");

const Players={}

Players.getListPlayers = async (req, res) => {
    const Players = await pool.query('SELECT *FROM players');
    res.render('links/player/list-player', { Players });
};

Players.postPlayer = async (req, res) => {
    const { name_Player, surname_Player, age_Player, player_Valuation } = req.body;
    const newLink = {
        name_Player,
        surname_Player,
        age_Player,
        player_Valuation 

    };
    
    await pool.query('INSERT INTO players set ?', [newLink]);
    req.flash('success', 'PLAYER CREADO CORRECTAMENTE');
    res.redirect('/players')
};

Players.deletePlayer = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM players WHERE ID = ?', [id]);
    req.flash('success', 'PLAYER ELIMINADO CORRECTAMENTE');
    res.redirect('/players');
 };

 Players.getPlayer = async (req, res) => {
    const { id } = req.params;
    const player = await pool.query('SELECT * FROM players WHERE id = ?', [id]);
    res.render('links/player/edit-player', {player: player[0]});
};

Players.updatePlayer = async (req, res) => {
    const { id } = req.params;
    const { name_Player, surname_Player, age_Player, player_Valuation } = req.body;
    const newLink = {
        name_Player,
        surname_Player,
        age_Player,
        player_Valuation
    };
    await pool.query('UPDATE players set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'PLAYER EDITADO CORRECTAMENTE')
    res.redirect('/players');
    
};
module.exports=Players;
