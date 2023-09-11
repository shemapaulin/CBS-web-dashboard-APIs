import { DataTypes } from 'sequelize';
import db from './index.js';

const Product = db.define('Product', {
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