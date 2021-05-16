module.exports = (sequelize, DataTypes) => {
  const JournalEntry = sequelize.define("JournalEntry", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50],
      },
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1],
    },
  });

  JournalEntry.associate = (models) => {
    JournalEntry.belongsTo(models.Catagory, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return JournalEntry;
};
