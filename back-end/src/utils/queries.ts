import { QueryTypes } from "sequelize";
import { sequelize } from "../utils/database";
import { Product } from "../models/product.model";

export const getProductsThatAreNotPacks = (productCodes: Array<number>) => {
    return sequelize.query(
        `
SELECT
    products.code,
    products.name,
    products.cost_price,
    products.sales_price
FROM products
LEFT JOIN packs
ON products.code = packs.pack_id
WHERE
    packs.pack_id IS NULL AND
    products.code IN (:codes);
    `,
        {
            type: QueryTypes.SELECT,
            replacements: { codes: productCodes },
            model: Product,
            mapToModel: true,
        },
    );
};

export const updatePacksProductBelongsTo = (code: number) => {
    return sequelize.query(
        `
WITH pack_ids_that_contain_product as (
    SELECT DISTINCT(pack_id) as pack_id
    FROM packs
    WHERE packs.product_id = :code
),

pack_sales_prices as (
    SELECT packs.pack_id, SUM(qty * products.sales_price) as pack_sales_price
    FROM packs
    LEFT JOIN products
    ON packs.product_id = products.code
    WHERE packs.pack_id IN (SELECT pack_id FROM pack_ids_that_contain_product)
    GROUP BY packs.pack_id
)

UPDATE products
JOIN pack_sales_prices ON products.code = pack_sales_prices.pack_id
SET products.sales_price = pack_sales_prices.pack_sales_price;
    `,
        {
            type: QueryTypes.BULKUPDATE,
            replacements: { code: String(code) },
        },
    );
};
