import { DataTypes } from 'sequelize';
import database from '.';

const Service = database.define('Service', {
    Service_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Service_sub_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    timestamps: false,
  });

export default Service;