import { DataTypes } from 'sequelize';
import database from '.';





const AboutValues = database.define('AboutValues', {
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
  });




  export default AboutValues