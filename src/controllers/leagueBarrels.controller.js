const pool = require("../config/database");

const LeagueBarrels={}

LeagueBarrels.postLeagueBarrel = async (req, res) => {
    const { league_barrels, name_league_barrels, location_league_barrels, type_league_barrels} = req.body;
    const newLink = {
        league_barrels,
        name_league_barrels,
        location_league_barrels,
        type_league_barrels


    };
    
    await pool.query('INSERT INTO leagueBarrels set ?', [newLink]);
    req.flash('success', 'LIGA BARRIAL CREADO CORRECTAMENTE');
    res.redirect('/leagueBarrels')
};

LeagueBarrels.getListLeagueBarrel = async (req, res) => {
    const leagueBarrels = await pool.query('SELECT *FROM leagueBarrels');
    console.log(leagueBarrels)
    res.render('links/leagueBarrel/list-leagueBarrel', { leagueBarrels });
}

LeagueBarrels.deleteLeagueBarrel = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM leagueBarrels WHERE ID = ?', [id]);
    req.flash('success', 'LEAGUE BARRELS ELIMINADO CORRECTAMENTE');
    res.redirect('/leagueBarrels');
 };

 LeagueBarrels.getLeagueBarrel = async (req, res) => {
    const { id } = req.params;
    const leagueBarrel = await pool.query('SELECT * FROM leagueBarrels WHERE id = ?', [id]);
    res.render('links/leagueBarrel/edit-leagueBarrel', {leagueBarrel: leagueBarrel[0]});
};
LeagueBarrels.updateLeagueBarrel = async (req, res) => {
    const { id } = req.params;
    const { league_barrels, name_league_barrels, location_league_barrels, type_league_barrels } = req.body;
    const newLink = {
        league_barrels,
        name_league_barrels,
        location_league_barrels,
        type_league_barrels
    };
    await pool.query('UPDATE leagueBarrels set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'LEAGUE BARRELS EDITADO CORRECTAMENTE')
    res.redirect('/leagueBarrels');
    
};
module.exports=LeagueBarrels;