const dts =(sequelize, type) =>{
    return sequelize.define('dts', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name_DT: type.STRING, 
        team_DT: type.STRING,
        age_DT: type.STRING,
        valoration_DT: type.STRING,

        createDts:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateDts:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = dts