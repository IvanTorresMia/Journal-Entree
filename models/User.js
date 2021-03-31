module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });


  User.associate = (models) => {
    User.hasOne(models.Profile, {
        onDelete: "cascade"
      });
      User.hasMany(models.Catagory, {
        foreignKey: {
          allowNull: false
        }
      });
  }

  return User;
};
