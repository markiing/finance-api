require("module-alias/register");
import dotenv from "dotenv";
import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import routes from "@routes";


dotenv.config();

const app :express.Express = express();

app.use(cors({origin: true}));
app.use(routes);

exports.finances = functions.https.onRequest(app);
