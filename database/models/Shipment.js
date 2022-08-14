module.exports = (sequelize, dataTypes) => {
    let alias = 'shipments'; // esto debería estar en singular
    let cols = {
        shipment_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        order_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false,
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        shipment_date: {
            type: dataTypes.DATE,
            allowNull: false
        },



    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Shipment = sequelize.define(alias, cols, config);

    Shipment.associate = function (models) {
        Shipment.belongsTo(models.Order, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "Orders",
            foreignKey: "order_id"
        })
    }
    //   Product.belongsToMany(models.Category, { // models.Actor -> Actors es el valor de alias en actor.js
    //     as: "Categories",
    //    foreignKey: 'category_id',
    //   timestamps: false
    //  })
    return Category
}
