import "express-async-errors";
import express from "express";
import cors from "cors";
import { productsRouter } from "./routes/products.route";
import { errorHandler } from "./middlewares/error-handler.middleware";

export const app = express();

app.use(express.json());
app.use(cors());
app.use("/products", productsRouter);
app.use(errorHandler);
