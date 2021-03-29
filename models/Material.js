module.exports = (sequelize, DataTypes) => {
    const Material = sequelize.define("Material", {
        
        materialName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        pricePerUnit: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
})
    return Material
}