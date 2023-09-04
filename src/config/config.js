import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
const db_url = process.env.DEV_URL;

const config={
    development:{
   url:db_url,
   dialect: 'mysql',
   port:port
    }
}
// console.log(" this is my DB_URL:", process.env.DB_URL);
console.log("CONNECTED", db_url);


export default config; 