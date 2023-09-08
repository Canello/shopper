import { res } from "../../test/mocks";
import { updatePrices } from "../update-prices.controller";
import {
    invalidProductUpdates,
    makeReq,
    makeProducts,
    validationWarnings,
    validProductUpdates,
} from "./mocks";
import {
    getProductsThatAreNotPacks,
    updatePacksProductBelongsTo,
} from "../../utils/queries";

jest.mock("../../utils/queries");

const failedResponse = {
    status: "failed",
    data: {
        warnings: validationWarnings,
    },
};

const successResponse = { status: "ok" };

describe("update-prices.controller", () => {
    beforeEach(() => {
        (getProductsThatAreNotPacks as jest.Mock).mockImplementation(() =>
            makeProducts(),
        );
        (updatePacksProductBelongsTo as jest.Mock).mockImplementation(() => {});
    });

    it("should yield a failed response if there is any validation problem", async () => {
        const spySend = jest.spyOn(res, "send");
        const spyStatus = jest.spyOn(res, "status");

        await updatePrices(
            makeReq(invalidProductUpdates, validationWarnings),
            res,
        );

        expect(spyStatus).toHaveBeenCalledTimes(1);
        expect(spyStatus).toHaveBeenCalledWith(400);
        expect(spySend).toHaveBeenCalledTimes(1);
        expect(spySend).toHaveBeenCalledWith(failedResponse);
    });

    it("should update products and responds properly", async () => {
        const spySend = jest.spyOn(res, "send");
        const spyStatus = jest.spyOn(res, "status");
        const spySave = jest.fn(() => {});
        (getProductsThatAreNotPacks as jest.Mock).mockImplementation(() =>
            makeProducts(spySave),
        );

        await updatePrices(makeReq(validProductUpdates, null), res);

        expect(updatePacksProductBelongsTo).toHaveBeenCalledTimes(3);
        expect(spySave).toHaveBeenCalledTimes(3);
        expect(spyStatus).toHaveBeenCalledTimes(1);
        expect(spyStatus).toHaveBeenCalledWith(200);
        expect(spySend).toHaveBeenCalledTimes(1);
        expect(spySend).toHaveBeenCalledWith(successResponse);
    });
});
