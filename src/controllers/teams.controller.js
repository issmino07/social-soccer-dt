const pool = require("../config/database");


const Teams={}



Teams.postTeam = async (req, res) => {
    const { name_team, league_team } = req.body;
    const newLink = {
        name_team,
        league_team

    };
    
    await pool.query('INSERT INTO teams set ?', [newLink]);
    req.flash('success', 'EQUIPO CREADO CORRECTAMENTE');
    res.redirect('/teams')
};

Teams.getListTeam = async (req, res) => {
    const team = await pool.query('SELECT *FROM teams');
    console.log(team)
    res.render('links/team/list-team', { team });
}

Teams.deleteTeam = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM teams WHERE ID = ?', [id]);
    req.flash('success', 'EQUIPO ELIMINADO CORRECTAMENTE');
    res.redirect('/teams');
 };

 Teams.getTeam = async (req, res) => {
    const { id } = req.params;
    const team = await pool.query('SELECT * FROM teams WHERE id = ?', [id]);
    res.render('links/team/edit-team', {team: team[0]});
};
Teams.updateTeam = async (req, res) => {
    const { id } = req.params;
    const { name_team, league_team } = req.body;
    const newLink = {
        name_team,
        league_team
    };
    await pool.query('UPDATE teams set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'EQUIPO EDITADO CORRECTAMENTE')
    res.redirect('/teams');
    
};

module.exports=Teams;

