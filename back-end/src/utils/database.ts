import { Sequelize } from "sequelize";
import { waitFor } from "./functions";

export const sequelize = new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USER!,
    process.env.DB_PASSWORD!,
    {
        host: process.env.DB_HOST!,
        dialect: "mysql",
        logging: false,
    },
);

export const tryToConnectToDB = async () => {
    const ATTEMPTS = 9;
    for (let i = 0; i < ATTEMPTS; i++) {
        try {
            await sequelize.authenticate();
            console.log("MySQL is connected.");
            return;
        } catch (err) {
            await waitFor(5000);
        }
    }
    console.log(
        `Unable to connect to MySQL. All ${ATTEMPTS} attempts have failed.`,
    );
};
