import { BACK_END_ADDRESS, SERVER_ERROR } from "../utils/constants";

export const validateProductUpdates = async (
    productUpdates: Array<ProductUpdate>
) => {
    try {
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
    } catch (err) {
        return SERVER_ERROR;
    }
};

export const updateProducts = async (productUpdates: Array<ProductUpdate>) => {
    try {
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
    } catch (err) {
        return SERVER_ERROR;
    }
};
