module.exports = (sequelize, dataTypes) => {
    let alias = 'categories'; // esto debería estar en singular
    let cols = {
        category_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false,
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },



    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {
        //    Category.belongsTo(models.Product, { // models.Genre -> Genres es el valor de alias en genres.js
        //       as: "Product",
        //     foreignKey: "product_id"
        //  })

        Category.belongsToMany(models.Product, { // models.Actor -> Actors es el valor de alias en actor.js
            as: "Products",
            foreignKey: 'product_id',
            timestamps: false
        })
        return Category
    }
}
