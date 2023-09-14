import { DataTypes } from "sequelize";
import db from "./index.js";

const aboutContact = db.define(
  "abautContact",
  {
    Phone_number: {
      type: DataTypes.STRING,

      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,

      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "aboutcontact",
  }
);

export default aboutContact;
