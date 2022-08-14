module.exports = (sequelize, dataTypes) => {
    let alias = 'users'; // esto debería estar en singular
    let cols = {
        user_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        pet_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false,
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        user_name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        first_name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        category_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },

        image: {
            type: dataTypes.STRING(100),
            allowNull: false
        },



    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        //  Movie.belongsTo(models.Pet, { // models.Genre -> Genres es el valor de alias en genres.js
        //    as: "Pet",
        //    foreignKey: "pet_id"
        // })

        User.belongsToMany(models.Pet, { // models.Actor -> Actors es el valor de alias en actor.js
            as: "Pets",
            foreignKey: 'pet_id',
            timestamps: false
        }),

            User.belongsToMany(models.Order, { // models.Actor -> Actors es el valor de alias en actor.js
                as: "Orders",
                foreignKey: 'order_id',
                timestamps: false
            })




    }
    return User
}

