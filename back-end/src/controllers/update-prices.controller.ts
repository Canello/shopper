import { Request, Response } from "express";
import { Op } from "sequelize";
import { Product } from "../models/product.model";
import { convertArrayToObject } from "../utils/functions";

// Main
export const updatePrices = async (req: Request, res: Response) => {
    if (req.body.validationWarnings)
        throw new Error("Pedido de atualização de produtos inválido.");

    const productUpdates = req.body.product_updates as Array<ProductUpdate>;
    const products = await getProducts(productUpdates);
    await updateProducts(productUpdates, products);

    res.status(200).json({ status: "ok" });
};

// Helper functions
async function getProducts(productUpdates: Array<ProductUpdate>) {
    const productCodes = productUpdates.map((p) => p.code);
    const products = await Product.findAll({
        where: {
            code: {
                [Op.in]: productCodes,
            },
        },
    });
    return convertArrayToObject(products, (p: Product) => p.code);
}

async function updateProducts(
    productUpdates: Array<ProductUpdate>,
    products: { [key: string | number]: Product },
) {
    const promises = productUpdates.map((productUpdate) => {
        const product = products[productUpdate.code];
        product.sales_price = productUpdate.sales_price;
        return product.save();
    });
    await Promise.all(promises);
}
