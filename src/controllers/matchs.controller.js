const pool = require("../config/database");

const Matchs={}

Matchs.getListMatchs = async (req, res) => {
    const game = await pool.query('SELECT *FROM game');
    console.log(game)
    res.render('links/list-game', { game });
}
module.exports=Matchs;
