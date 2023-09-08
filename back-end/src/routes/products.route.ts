import express from "express";
import { validateUpdates } from "../middlewares/validate-updates.middleware";
import { updatePrices } from "../controllers/update-prices.controller";
import { validatePriceUpdates } from "../controllers/validate-price-updates.controller";

export const productsRouter = express.Router();

productsRouter.patch("/", validateUpdates, updatePrices);
productsRouter.post("/validate", validateUpdates, validatePriceUpdates);
