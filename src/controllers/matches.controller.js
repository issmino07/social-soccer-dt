const pool = require("../config/database");

const Matches={}

Matches.getListMatches = async (req, res) => {
    const player = await pool.query('SELECT *FROM dt');
    console.log(player)
    res.render('links/list-player', { dt});
};
module.exports=Matches;