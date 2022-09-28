const leagueBarrels =(sequelize, type) =>{
    return sequelize.define('leagueBarrels', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        league_barrels: type.STRING, 
        name_league_barrels: type.STRING,
        location_league_barrels: type.STRING,
        type_league_barrels: type.STRING,

        createLeague_barrels:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateLeague_barrels:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = leagueBarrels