import express from "express";
import viewEngine from "./config/viewEngine.js";
import initWebRouters from "./route/web.js";
import { } from 'dotenv/config'

const app = express();
const port = process.env.PORT || 8080;

viewEngine(app)
initWebRouters(app)


app.listen(port, () => {
    console.log(`Example app is listening at http://localhost:${port}`);
})