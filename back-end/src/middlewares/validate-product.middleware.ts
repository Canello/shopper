import { NextFunction, Request, Response } from "express";
import { Op } from "sequelize";
import { Product } from "../models/product.model";

type ProductUpdate = {
    code: number;
    price: number;
};

export const validateProduct = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const productUpdates = req.body.product_updates as Array<ProductUpdate>;
    const productCodes = productUpdates.map(
        (productUpdate) => productUpdate.code,
    );
    const products: Array<Product> = await Product.findAll({
        where: {
            code: {
                [Op.in]: productCodes,
            },
        },
    });
    const productsObj: any = {};
    products.forEach((product) => {
        productsObj[product.code] = product;
    });

    for (const productUpdate of productUpdates) {
        validateCosts(productUpdate, productsObj[productUpdate.code]);
        validatePriceVariation(productUpdate, productsObj[productUpdate.code]);
    }
};

function validateCosts(productUpdate: ProductUpdate, product: Product) {
    if (productUpdate.price < product.cost_price)
        throw new Error("Preço abaixo do custo.");
}

function validatePriceVariation(
    productUpdate: ProductUpdate,
    product: Product,
) {
    const priceVariation =
        Math.abs(
            (productUpdate.price - product.sales_price) / product.sales_price,
        ) * 100;
    if (priceVariation > 10) throw new Error("Variação de preço alta");
}
