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
    for (let i = 0; i < 5; i++) {
        try {
            await sequelize.authenticate();
            console.log("MySQL is connected.");
            break;
        } catch (err) {
            console.log("MySQL connection error. Attempt number", i + 1);
            console.log(err);
            await waitFor(5000);
        }
    }
};
