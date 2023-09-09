import { NextFunction, Request, Response } from "express";
import { Op } from "sequelize";
import { Product } from "../models/product.model";
import { convertArrayToObject } from "../utils/functions";

// Main
export const validateUpdates = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const productUpdates = req.body.product_updates as Array<ProductUpdate>;

    const products = await getProducts(productUpdates);
    const validation: Validation = { validationWarnings: null };
    validateProductUpdates(productUpdates, products, validation);
    req.body.validationWarnings = validation.validationWarnings;

    next();
};

// Helper functions
async function getProducts(productUpdates: Array<ProductUpdate>) {
    const productCodes = productUpdates.map((p) => p.code);
    const products: Array<Product> = await Product.findAll({
        where: {
            code: {
                [Op.in]: productCodes,
            },
        },
    });
    return convertArrayToObject(products, (p) => p.code);
}

function validateProductUpdates(
    productUpdates: Array<ProductUpdate>,
    products: Obj<Product>,
    validation: Validation,
) {
    for (const productUpdate of productUpdates) {
        const product = products[productUpdate.code];
        const isValidFormat = validateFormat(productUpdate, validation);
        if (!isValidFormat) continue;
        const exists = validateExistence(productUpdate, product, validation);
        if (!exists) continue;
        validateCosts(productUpdate, product, validation);
        validatePriceVariation(productUpdate, product, validation);
    }
}

function validateExistence(
    productUpdate: ProductUpdate,
    product: Product,
    validation: Validation,
) {
    if (!product) {
        addWarning(
            "Não existe um produto com esse código.",
            productUpdate.code,
            validation,
        );
        return false;
    }
    return true;
}

function validateFormat(productUpdate: ProductUpdate, validation: Validation) {
    let result = true;
    if (typeof productUpdate.code !== "number") {
        addWarning("Campo code inválido.", productUpdate.code, validation);
        result = false;
    }
    if (typeof productUpdate.sales_price !== "number") {
        addWarning(
            "Campo sales_price inválido.",
            productUpdate.code,
            validation,
        );
        result = false;
    }
    return result;
}

function validateCosts(
    productUpdate: ProductUpdate,
    product: Product,
    validation: Validation,
) {
    if (productUpdate.sales_price < product.cost_price) {
        addWarning(
            `Preço abaixo do custo (R$ ${product.cost_price}).`,
            productUpdate.code,
            validation,
        );
    }
}

function validatePriceVariation(
    productUpdate: ProductUpdate,
    product: Product,
    validation: Validation,
) {
    const MAX_PRICE = 9999999.99;
    const pricePercentageVariation =
        Math.abs(
            (productUpdate.sales_price - product.sales_price) /
                product.sales_price,
        ) * 100;
    if (productUpdate.sales_price > MAX_PRICE) {
        addWarning(`Preço máximo excedido.`, productUpdate.code, validation);
    }
    if (pricePercentageVariation > 10) {
        addWarning(
            `Variação de preço maior que 10%.`,
            productUpdate.code,
            validation,
        );
    }
}

function addWarning(warning: string, code: number, validation: Validation) {
    if (!validation.validationWarnings) {
        validation.validationWarnings = {};
    }
    if (!validation.validationWarnings[code]) {
        validation.validationWarnings[code] = [];
    }
    validation.validationWarnings[code].push(warning);
}
