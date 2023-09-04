import {Sequelize} from "sequelize";
import config from "../config/config.js";

const env = process.env.NODE_ENV || 'development';

const configer=config[env];

let database;
if(configer.url){
database=new Sequelize(configer.url,{
    dialect:"mysql"
});
}else {
    database= new Sequelize(
      configer.database,
      configer.username,
      configer.password,
      configer
    );
  }

export default database;
