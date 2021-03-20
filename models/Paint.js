module.exports = ( sequelize, DataTypes ) => {
    const Paint = sequelize.define("Paint", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        quality: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        pricePerGal: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    })

    
    return Paint
}