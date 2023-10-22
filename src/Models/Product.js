import { DataTypes } from 'sequelize';
import db from './index.js';

const Product = db.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  prod_description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  prod_sub_description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: false,
  tableName: "product",
});


export default Product;