import { Request, Response } from "express";
import { Product } from "../models/product.model";
import { Op } from "sequelize";
import { convertArrayToObject } from "../utils/functions";

// Main
export const validatePriceUpdates = async (req: Request, res: Response) => {
    const { product_updates: productUpdates, validationWarnings } = req.body;

    const products = await getProducts(productUpdates);
    const productInfos = makeProductInfos(
        productUpdates,
        products,
        validationWarnings,
    );

    res.status(200).send({
        status: "ok",
        data: {
            is_valid: !validationWarnings,
            product_infos: productInfos,
        },
    });
};

// Helper functions
async function getProducts(productUpdates: Array<ProductUpdate>) {
    const productCodes = productUpdates.map((p: ProductUpdate) => p.code);
    const products: Array<Product> = await Product.findAll({
        where: {
            code: {
                [Op.in]: productCodes,
            },
        },
    });
    return convertArrayToObject(products, (p) => p.code);
}

function makeProductInfos(
    productUpdates: Array<ProductUpdate>,
    products: Obj<Product>,
    validationWarnings: ValidationWarnings,
) {
    return productUpdates.map((p: ProductUpdate) => {
        const product = products[p.code];
        const productExists = !!product;
        return {
            exists: productExists,
            code: p.code,
            name: productExists ? product.name : null,
            current_sales_price: productExists ? product.sales_price : null,
            new_sales_price: p.sales_price.toFixed(2),
            warnings: validationWarnings
                ? validationWarnings[p.code] ?? null
                : null,
        };
    });
}
