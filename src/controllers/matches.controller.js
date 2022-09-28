const pool = require("../config/database");

src/controllers/matches.controller.js
const Matches={}

const Matchs={}

Matchs.getListMatchs = async (req, res) => {
    const game = await pool.query('SELECT *FROM game');
    console.log(game)
    res.render('links/list-game', { game });
}
module.exports=Matchs;

const matchs={}
src/controllers/matchs.controller.js

Matches.getListMatches = async (req, res) => {
    const player = await pool.query('SELECT *FROM dt');
    console.log(player)
    res.render('links/list-player', { dt});
};

module.exports=Matches;

module.exports=matchs;
src/controllers/matchs.controller.js
