import { DataTypes } from 'sequelize';
import db from './index.js';





const AboutValues = db.define('AboutValues', {
    Main_title: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    Value_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Value_sub_title: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
  }, {
    timestamps: false,
    tableName: "aboutvalues", 
  });




  export default AboutValues