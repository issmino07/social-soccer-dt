const pool = require("../config/database");

const Dts={}

Dts.getListDts = async (req, res) => {
    const dt = await pool.query('SELECT *FROM dt');
    console.log(dt)
    res.render('links/list', { dt });
}
module.exports=Dts;
