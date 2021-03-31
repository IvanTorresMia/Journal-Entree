module.exports = (sequelize, DataTypes) => {
  const Catagory = sequelize.define("Catagory", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20],
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });


Catagory.associate = (models) => {
  Catagory.hasMany(models.JournalEntry, {
    onDelete: "cascade"
  })
  Catagory.belongsTo(models.User);
}

  return Catagory;
};
