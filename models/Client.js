module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define("Client", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            validate: {
                notEmpty: true
            }
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    })
    return Client;
}