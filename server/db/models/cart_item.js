const Sequelize = require("sequelize");
const db = require("../db");

const CartItem = db.define("CartItem", {
    //TODO: Validate data
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
    },
    pastPrice: {
        type: Sequelize.INTEGER,
    },
    currentPrice: {
        type: Sequelize.INTEGER,
    },
});

module.exports = CartItem;
