module.exports = (seqeulize, DataTypes) => {
    const User = seqeulize.define("User", {
       
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    })
    return User
}
