import "express-async-errors";
import express from "express";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(cors());
