const pool = require("../config/database");

const Dts={}

Dts.getListDts = async (req, res) => {
    const dt = await pool.query('SELECT *FROM dts');
    console.log(dt)
    res.render('links/dt/list', { dt });
}

Dts.postDt = async (req, res) => {
    const { name_DT, team_DT, age_DT, valoration_DT } = req.body;
    const newLink = {
        name_DT,
        team_DT,
        age_DT,
        valoration_DT 

    };
    
    await pool.query('INSERT INTO dt set ?', [newLink]);
    req.flash('success', 'DT CREADO CORRECTAMENTE');
    res.redirect('/links')
};
Dts.deleteDt = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM dt WHERE ID = ?', [id]);
    req.flash('success', 'DT ELIMINADO CORRECTAMENTE');
    res.redirect('/links');
 };
module.exports=Dts;
