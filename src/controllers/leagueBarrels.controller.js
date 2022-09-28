const pool = require("../config/database");

const leagueBarrels={}

Players.getListPlayers = async (req, res) => {
    const player = await pool.query('SELECT *FROM dt');
    console.log(player)
    res.render('links/list-player', { dt });
};
module.exports=leagueBarrels;