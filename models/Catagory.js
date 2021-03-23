module.exports = (sequelize, DataTypes) => {
    const Catagory = sequelize.define("Catagory", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        },
        text: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    return Catagory;

}