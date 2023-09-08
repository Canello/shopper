import { BACK_END_ADDRESS } from "../utils/constants";

export const validateProductUpdates = async (
    productUpdates: Array<ProductUpdate>
) => {
    const response = await fetch(BACK_END_ADDRESS + "/products/validate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            product_updates: productUpdates,
        }),
    });
    const responseJson = await response.json();
    return responseJson;
};

export const updateProducts = async (productUpdates: Array<ProductUpdate>) => {
    const response = await fetch(BACK_END_ADDRESS + "/products", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            product_updates: productUpdates,
        }),
    });
    const responseJson = await response.json();
    return responseJson;
};
