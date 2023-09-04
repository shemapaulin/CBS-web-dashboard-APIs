import { DataTypes } from 'sequelize';
import database from '.';

const Product = database.define('Product', {
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
});


export default Product;