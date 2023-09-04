import { DataTypes } from 'sequelize';
import database from '.';



const aboutContact = database.define('abautContact', {
    Phone_number: {
        type: DataTypes.STRING,

        allowNull: false,
    },
    Email: {
        type: DataTypes.STRING,

        allowNull: false,
    },

},{
    timestamps: false,
});




export default aboutContact