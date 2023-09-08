import { Request, Response } from "express";
import { Product } from "../models/product.model";
import { convertArrayToObject } from "../utils/functions";
import {
    getProductsThatAreNotPacks,
    updatePacksProductBelongsTo,
} from "../utils/queries";

// Main
export const updatePrices = async (req: Request, res: Response) => {
    const productUpdates = req.body.product_updates as Array<ProductUpdate>;
    const validationWarnings = req.body.validationWarnings;

    if (validationWarnings) {
        return res.status(400).send({
            status: "failed",
            data: {
                warnings: validationWarnings,
            },
        });
    }

    const productCodes = productUpdates.map((p) => p.code);
    const productsThatAreNotPacks = await getOnlyProductsThatAreNotPacks(
        productCodes,
    );
    await updateProducts(productUpdates, productsThatAreNotPacks);

    res.status(200).send({ status: "ok" });
};

// Helper functions
async function getOnlyProductsThatAreNotPacks(productCodes: Array<number>) {
    const products = await getProductsThatAreNotPacks(productCodes);
    return convertArrayToObject(products, (p) => p.code);
}

async function updateProducts(
    productUpdates: Array<ProductUpdate>,
    productsThatAreNotPacks: Obj<Product>,
) {
    const productUpdatesThatAreNotPacks = productUpdates.filter(
        (p) => productsThatAreNotPacks[p.code],
    );
    const promises = productUpdatesThatAreNotPacks.map((p) =>
        updateProduct(productsThatAreNotPacks[p.code], p),
    );
    await Promise.all(promises);
}

async function updateProduct(product: Product, productUpdate: ProductUpdate) {
    product.sales_price = productUpdate.sales_price;
    await product.save();
    await updatePacksProductBelongsTo(product.code);
}
