const players =(sequelize, type) =>{
    return sequelize.define('players', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name_Player: type.STRING, 
        surname_Player: type.STRING,
        age_Player: type.STRING,
        player_Valuation: type.STRING,

        createPlayers:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatePlayers:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = players