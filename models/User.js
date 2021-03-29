module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  User.associate = function (models) {
    // Using relational data. User will have many entries, if user is deleted then they all delete.
    User.hasMany(models.Catagory, {
      onDelete: "cascade",
    });


    
  }

  User.associate = (models) => {
    User.hasOne(models.Profile, {
        onDelete: "cascade"
      });
  }

  return User;
};
