import { Product } from "../../models/product.model";
import { validatePriceUpdates } from "../validate-price-updates.controller";
import { res } from "../../test/mocks";
import {
    invalidProductUpdates,
    makeReq,
    makeProducts,
    validProductUpdates,
    validationWarnings,
} from "./mocks";

jest.mock("../../models/product.model");

const invalidResponse = {
    status: "ok",
    data: {
        is_valid: false,
        product_infos: [
            {
                exists: true,
                code: 16,
                name: "Something",
                current_sales_price: "10.50",
                new_sales_price: "23.00",
                warnings: validationWarnings[16],
            },
            {
                exists: false,
                code: 17,
                new_sales_price: "23.00",
                name: null,
                current_sales_price: null,
                warnings: validationWarnings[17],
            },
            {
                exists: true,
                code: 18,
                name: "Something2",
                current_sales_price: "10.50",
                new_sales_price: "11.00",
                warnings: validationWarnings[18],
            },
            {
                exists: true,
                code: 20,
                name: "Something3",
                current_sales_price: "10.50",
                new_sales_price: "23.00",
                warnings: validationWarnings[20],
            },
        ],
    },
};

const validResponse = {
    status: "ok",
    data: {
        is_valid: true,
        product_infos: [
            {
                exists: true,
                code: 16,
                name: "Something",
                current_sales_price: "10.50",
                new_sales_price: "11.00",
                warnings: null,
            },
            {
                exists: true,
                code: 18,
                name: "Something2",
                current_sales_price: "10.50",
                new_sales_price: "11.00",
                warnings: null,
            },
            {
                exists: true,
                code: 20,
                name: "Something3",
                current_sales_price: "10.50",
                new_sales_price: "11.00",
                warnings: null,
            },
        ],
    },
};

describe("validate-prices-updates.controller", () => {
    it("should handle invalid updates properly", async () => {
        (Product.findAll as jest.Mock).mockResolvedValue(makeProducts());
        const spyStatus = jest.spyOn(res, "status");
        const spySend = jest.spyOn(res, "send");

        await validatePriceUpdates(
            makeReq(invalidProductUpdates, validationWarnings),
            res,
        );

        expect(spyStatus).toHaveBeenCalledTimes(1);
        expect(spyStatus).toHaveBeenCalledWith(200);
        expect(spySend).toHaveBeenCalledTimes(1);
        expect(spySend).toHaveBeenCalledWith(invalidResponse);
    });

    it("should return valid updates properly", async () => {
        (Product.findAll as jest.Mock).mockResolvedValue(makeProducts());
        const spyStatus = jest.spyOn(res, "status");
        const spySend = jest.spyOn(res, "send");

        await validatePriceUpdates(makeReq(validProductUpdates, null), res);

        expect(spySend).toHaveBeenCalledTimes(1);
        expect(spySend).toHaveBeenCalledWith(validResponse);
        expect(spyStatus).toHaveBeenCalledTimes(1);
        expect(spyStatus).toHaveBeenCalledWith(200);
    });
});
