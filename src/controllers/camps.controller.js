const pool = require("../config/database");


const Camps={}



Camps.postCamp = async (req, res) => {
    const { camp_number } = req.body;
    const newLink = {
        camp_number
    };
    
    await pool.query('INSERT INTO camps set ?', [newLink]);
    req.flash('success', 'CAMPO CREADO CORRECTAMENTE');
    res.redirect('/camps')
};

Camps.getListCamp = async (req, res) => {
    const camp = await pool.query('SELECT *FROM camps');
    console.log(camp)
    res.render('links/camp/list-camp', { camp });
}

Camps.deleteCamp = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM camps WHERE ID = ?', [id]);
    req.flash('success', 'CAMPO ELIMINADO CORRECTAMENTE');
    res.redirect('/camps');
 };

 Camps.getCamp = async (req, res) => {
    const { id } = req.params;
    const camp = await pool.query('SELECT * FROM camps WHERE id = ?', [id]);
    res.render('links/camp/edit-camp', {camp: camp[0]});
};
Camps.updateCamp = async (req, res) => {
    const { id } = req.params;
    const { camp_number } = req.body;
    const newLink = {
        camp_number
    };
    await pool.query('UPDATE camps set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'CAMPO EDITADO CORRECTAMENTE')
    res.redirect('/camps');
    
};

module.exports=Camps;

