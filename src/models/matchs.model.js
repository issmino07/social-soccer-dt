const matchs =(sequelize, type) =>{
    return sequelize.define('matchs', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        place_Match: type.STRING, 
        match_time: type.STRING,
<<<<<<< HEAD
        Date_match: type.STRING, 

        createDts:{
=======
        Date_match: type.STRING,

        createMatchs:{
>>>>>>> 126e3b0ec6ee67585774fbf6ef8c60fe3235210d
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
<<<<<<< HEAD
        updateDts:{
=======
        updateMatchs:{
>>>>>>> 126e3b0ec6ee67585774fbf6ef8c60fe3235210d
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = matchs