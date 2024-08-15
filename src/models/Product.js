import { DataTypes } from "sequelize";
import { sequelize } from "../db/connection.js";

 const Product = sequelize.define('Product', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

export default Product
