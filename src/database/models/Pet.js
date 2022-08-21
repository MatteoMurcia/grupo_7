module.exports = (sequelize, dataTypes) => {
    let alias = 'Pet'; // esto debería estar en singular
    let cols = {
        pet_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false,
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        specie: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        age: dataTypes.BIGINT(3).UNSIGNED,



    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Pet = sequelize.define(alias, cols, config);

    Pet.associate = function (models) {
        Pet.belongsTo(models.User, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "users",
            foreignKey: "user_id"
        })


    }

    return Pet
};