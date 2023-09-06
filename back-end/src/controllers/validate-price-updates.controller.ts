import { Request, Response } from "express";

// Main
export const validatePriceUpdates = (req: Request, res: Response) => {
    const { validationWarnings } = req.body;

    const data = validationWarnings
        ? { isValid: false, warnings: validationWarnings }
        : { isValid: true };

    res.status(200).json({ status: "ok", data });
};
