import { Request, Response, NextFunction } from "express";

export const errorHandler = async (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    console.log(err);
    res.status(500).send({
        status: "failed",
        data: {
            error: "Alguma coisa deu errado.",
        },
    });
};
