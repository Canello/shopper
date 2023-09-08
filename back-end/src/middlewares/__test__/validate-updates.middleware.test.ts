import { res } from "../../test/mocks";
import {
    validProducts,
    makeReq,
    validProductUpdates,
    validationWarnings,
    invalidProductUpdates,
    invalidProducts,
} from "./mocks";
import { validateUpdates } from "../validate-updates.middleware";
import { Product } from "../../models/product.model";

jest.mock("../../models/product.model");

describe("validate-updates.middleware", () => {
    it("should have validation warnings equal null when everything is valid", async () => {
        (Product.findAll as jest.Mock).mockReturnValue(validProducts);
        const req = makeReq(validProductUpdates);
        await validateUpdates(req, res, () => {});
        expect(req.body.validationWarnings).toBe(null);
    });

    it("should yield the correct warnings for each validation error", async () => {
        (Product.findAll as jest.Mock).mockReturnValue(invalidProducts);
        const req = makeReq(invalidProductUpdates);
        await validateUpdates(req, res, () => {});
        expect(req.body.validationWarnings).toEqual(validationWarnings);
    });
});
