module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define("Client", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
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
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    })

    Client.associate = (models) => {
        Client.hasMany(models.Order, {
            // onDelete: "cascade"
        })
    }
    

    Client.beforeCreate = (dbClient) => {
        dbClient.fullName = dbClient.fullName.toLowerCase()
        
        
    }
    
    return Client;
}