module.exports = (sequelize, DataTypes) => {

    const JournalEntree = sequelize.define("JournalEntree", {

        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
              }
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    })
    

    return JournalEntree;
}