module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User", {

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }

    })

    return User
}