const pool = require("../config/database");


const Matches={}



Matches.postMatch = async (req, res) => {
    const { place_Match, match_time, Date_match} = req.body;
    const newLink = {
        place_Match,
        match_time,
        Date_match

    };
    
    await pool.query('INSERT INTO matches set ?', [newLink]);
    req.flash('success', 'MATCH CREADO CORRECTAMENTE');
    res.redirect('/matches')
};

Matches.getListMatch = async (req, res) => {
    const match = await pool.query('SELECT *FROM matches');
    console.log(match)
    res.render('links/match/list-match', { match });
}

Matches.deleteMatch = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM matches WHERE ID = ?', [id]);
    req.flash('success', 'MATCH ELIMINADO CORRECTAMENTE');
    res.redirect('/matches');
 };

 Matches.getMatch = async (req, res) => {
    const { id } = req.params;
    const match = await pool.query('SELECT * FROM matches WHERE id = ?', [id]);
    res.render('links/match/edit-match', {match: match[0]});
};
Matches.updateMatch = async (req, res) => {
    const { id } = req.params;
    const { place_Match, match_time, Date_match } = req.body;
    const newLink = {
        place_Match,
        match_time,
        Date_match
    };
    await pool.query('UPDATE matches set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'MATCH EDITADO CORRECTAMENTE')
    res.redirect('/matches');
    
};

module.exports=Matches;

