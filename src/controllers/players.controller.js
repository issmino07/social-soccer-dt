const pool = require("../config/database");

const Players={}

Players.getListPlayers = async (req, res) => {
    const player = await pool.query('SELECT *FROM player');
    console.log(player)
    res.render('links/list-player', { player });
};
module.exports=Players;
