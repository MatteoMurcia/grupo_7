module.exports = (sequelize, dataTypes) => {
    let alias = 'products'; // esto debería estar en singular
    let cols = {
        product_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        category_product: {
            type: dataTypes.STRING(10),
            allowNull: false,
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        product_name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        desc_product: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        brand: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },


        images: {
            type: dataTypes.STRING(100),
            allowNull: false
        },



    };
    let config = {
        timestamps: false,
        //    createdAt: 'created_at',
        //    updatedAt: 'updated_at',
        //    deletedAt: false
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.Ctegory, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "Categories",
            foreignKey: "category_id"
        })

        //Product.belongsToMany(models.Category, { // models.Actor -> Actors es el valor de alias en actor.js
        //  as: "Categories",
        // foreignKey: 'category_id',
        //timestamps: false
        // })

    }
    return Product
}