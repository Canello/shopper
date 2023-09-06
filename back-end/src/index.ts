import { config } from "dotenv";
config();
import { app } from "./app";
import { sequelize } from "./utils/database";

const start = async () => {
    try {
        await sequelize.authenticate();
        console.log("MySQL is connected.");
    } catch (err) {
        console.log("MySQL connection error.");
    }

    const port = process.env.PORT || 3001;
    app.listen(port, () => {
        console.log("Listening on port", port);
    });
};

start();
