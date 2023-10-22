import { DataTypes } from 'sequelize';
import db from './index.js';

const Homepage = db.define('Homepage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  hero_description: {
    type: DataTypes.STRING,
    allowNull: true, 
  },
  hero_sub_description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
},{
    timestamps: false, 
    tableName: "homepage",
  });


  export default Homepage;
export { Homepage};