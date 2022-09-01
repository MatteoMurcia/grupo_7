module.exports = (sequelize, dataTypes) => {
    let alias = 'User'; // esto debería estar en singular
    let cols = {
        user_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
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
        category_user: {
            type: dataTypes.STRING(50),
            allowNull: false
        },

        images: {
            type: dataTypes.STRING(100),
            allowNull: false
        },



    };
    let config = {
        timestamps: false,
        tableName: "users"
        //   createdAt: 'created_at',
        //   updatedAt: 'updated_at',
        //       deletedAt: false
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        //   User.belongsToMany(models.Pet, { // models.Actor -> Actors es el valor de alias en actor.js
        //       as: "Pets",
        //      foreignKey: 'pet_id',
        //        timestamps: false
        //   }),

        User.hasMany(models.Order, {
            as: "orders",
            foreignKey: 'user_id',
            timestamps: false
        })




    }
    return User
}

