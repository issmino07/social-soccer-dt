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
    
    await pool.query('INSERT INTO dts set ?', [newLink]);
    req.flash('success', 'DT CREADO CORRECTAMENTE');
    res.redirect('/dts')
};
Dts.deleteDt = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM dts WHERE ID = ?', [id]);
    req.flash('success', 'DT ELIMINADO CORRECTAMENTE');
    res.redirect('/dts');
 };

 Dts.getDt = async (req, res) => {
    const { id } = req.params;
    const dt = await pool.query('SELECT * FROM dts WHERE id = ?', [id]);
    res.render('links/dt/edit', {dt: dt[0]});
};

Dts.updateDt = async (req, res) => {
    const { id } = req.params;
    const { name_DT, team_DT, age_DT, valoration_DT } = req.body;
    const newLink = {
        name_DT,
        team_DT,
        age_DT,
        valoration_DT
    };
    await pool.query('UPDATE dts set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'EDITADO CORRECTAMENTE')
    res.redirect('/dts');
    
};
module.exports=Dts;
