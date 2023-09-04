import express from "express";
import dotenv from "dotenv";
import database from "./src/Models/index.js";
import userRouter from "./src/Routes/userRoute.js";

dotenv.config();
const app = express();

app.use(express.json());
const port = process.env.PORT;


app.use("/api", userRouter);
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
