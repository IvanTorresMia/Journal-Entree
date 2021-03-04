module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User", {

        email: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    })

    User.associate = function(models) {
   
        User.hasMany(models.JournalEntree);
      };
    return User;
}