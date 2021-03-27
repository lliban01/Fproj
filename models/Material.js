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
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
})
    return Material
}