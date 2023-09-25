import {Sequelize} from "sequelize";
import config from "../config/config.js";



let database;

database=new Sequelize(config.development.url,{
    dialect:"mysql"
})

export default  database;
