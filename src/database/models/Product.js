module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; // esto debería estar en singular
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

        type: {
            type: dataTypes.STRING(50),
            allowNull: false
        }

    };
    let config = {
        timestamps: false,
        tableName: "product"
        //    createdAt: 'created_at',
        //    updatedAt: 'updated_at',
        //    deletedAt: false
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsToMany(models.Order, {
            as: "orders",
            otherKey: "product_id",
            through: "order_products",
            foreignKey: "order_id"
        })
    }

    return Product
}