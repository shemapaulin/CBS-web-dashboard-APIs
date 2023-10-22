import express from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import database from "./src/Models/index.js";
import userRouter from "./src/Routes/userRoute.js";
import { uploadImage } from "./src/middleware/fileUpload.js";
import { homeRouter } from "./src/Routes/homePage.js";
import { serviceRoute } from "./src/Routes/ServiceRoute.js";
import { productRoute } from "./src/Routes/ProductRoute.js";
import { valueRoute } from "./src/Routes/aboutValuesRoute.js";
import { contactsRouter } from "./src/Routes/aboutContactRoute.js";
import cors from 'cors';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000/api-docs/#/', 
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));

const port = process.env.PORT;

app.use("/api", contactsRouter);

app.use("/api", valueRoute);
app.use("/api", productRoute);
app.use("/api", serviceRoute);
app.use("/api", homeRouter);

app.use("/api", productRoute);
app.use("/api", serviceRoute);

app.use("/api", serviceRoute);

app.use("/api", homeRouter);

app.use("/api", userRouter);
app.use("/", uploadImage);

// Swagger Options
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Node.js Express API with Swagger",
      version: "1.0.0",
      description: "A simple REST API documentation with Swagger",
    },
  },
  apis: ["./src/Routes/*.js"], // Your API routes
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Middleware for Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
