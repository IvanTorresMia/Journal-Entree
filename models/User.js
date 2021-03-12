module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User", {

        email: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    })

    User.associate = function(models) {
   
        // Using relational data. User will have many entries, if user is deleted then they all delete.
        User.hasMany(models.JournalEntry, {
            onDelete: "cascade"
        });
      };
    return User;
}