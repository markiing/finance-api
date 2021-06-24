import 'module-alias/register';
import * as functions from "firebase-functions";
import express from 'express'
import cors from 'cors'
import Router from "@routes";

const app :express.Express = express()
app.use(cors({origin: true}));

app.use(Router);

exports.finances = functions.https.onRequest(app);