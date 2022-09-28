const pool = require("../config/database");


const Matches={}



Matches.getListMatches = async (req, res) => {
    const game = await pool.query('SELECT *FROM game');
    console.log(game)
    res.render('links/list-game', { game });
}
module.exports=Matches;

