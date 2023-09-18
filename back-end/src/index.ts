import { config } from "dotenv";
config();
import { app } from "./app";
import { tryToConnectToDB } from "./utils/database";

const start = async () => {
    await tryToConnectToDB();

    const port = process.env.PORT || 3001;
    app.listen(port, () => {
        console.log(`Listening on port ${port}.`);
    });
};

start();
