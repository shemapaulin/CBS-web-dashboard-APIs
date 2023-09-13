import express from "express";
import dotenv from "dotenv";
import database from "./src/Models/index.js";
import userRouter from "./src/Routes/userRoute.js";
import { uploadImage } from "./src/middleware/fileUpload.js";
import {homeRouter} from"./src/Routes/homePage.js"

import {serviceRoute} from "./src/Routes/ServiceRoute.js";
import { productRoute } from "./src/Routes/ProductRoute.js";


import {serviceRoute} from "./src/Routes/ServiceRoute.js";



dotenv.config();
const app = express();

app.use(express.json());
const port = process.env.PORT;


app.use("/api",productRoute)
app.use("/api",serviceRoute);


app.use("/api",serviceRoute);


app.use("/api",homeRouter);
app.use("/api", userRouter);
app.use("/", uploadImage);
app.listen(port, () => {
  console.log(`server is listening on port${port} `);
});


database
  .authenticate()
  .then(() => {
    console.log("connecting to database have established successful");
  })
  .catch((error) => {
    console.log("connecting to database has failed", error);
  });
