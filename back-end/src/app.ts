import "express-async-errors";
import express from "express";
import cors from "cors";
import { validateUpdates } from "./middlewares/validate-updates.middleware";
import { updatePrices } from "./controllers/update-prices.controller";
import { validatePriceUpdates } from "./controllers/validate-price-updates.controller";

export const app = express();

app.use(express.json());
app.use(cors());

app.patch("/products", validateUpdates, updatePrices);
app.post("/products/validate", validateUpdates, validatePriceUpdates);
