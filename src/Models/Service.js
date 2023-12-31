import { DataTypes } from 'sequelize';
import db from './index.js';

const Service = db.define('Service', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
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
    tableName: "service",
  });

export default Service;