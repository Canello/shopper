import "express-async-errors";
import express from "express";
import cors from "cors";
import { validateProduct } from "./middlewares/validate-product.middleware";

export const app = express();

app.use(express.json());
app.use(cors());

app.patch("/products", validateProduct, () => {});
app.post("/products/validate", validateProduct, () => {});
