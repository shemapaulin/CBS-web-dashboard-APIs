import { DataTypes } from 'sequelize';
import db from './index.js';

const Homepage = db.define('Homepage', {
    hero_description: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    hero_sub_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    timestamps: false, 
    tableName: "homepage",
  });


  export default Homepage;
export { Homepage};