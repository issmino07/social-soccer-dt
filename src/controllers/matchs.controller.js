const pool = require("../config/database");

<<<<<<< HEAD
const Matchs={}

Matchs.getListMatchs = async (req, res) => {
    const game = await pool.query('SELECT *FROM game');
    console.log(game)
    res.render('links/list-game', { game });
}
module.exports=Matchs;
=======
const matchs={}

Players.getListPlayers = async (req, res) => {
    const player = await pool.query('SELECT *FROM dt');
    console.log(player)
    res.render('links/list-player', { dt});
};
module.exports=matchs;
>>>>>>> 126e3b0ec6ee67585774fbf6ef8c60fe3235210d
