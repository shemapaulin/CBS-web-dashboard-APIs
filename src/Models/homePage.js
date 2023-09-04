import { DataTypes } from 'sequelize';
import database from '.';

const Homepage = database.define('Homepage', {
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
  });

export default Homepage;