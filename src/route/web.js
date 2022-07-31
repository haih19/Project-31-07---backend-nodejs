import express from "express";
import getHomePage from "../controllers/homeController.js"

let router = express.Router();

let initWebRouters = (app) => {

    router.get('/', getHomePage)

    router.get('/about', (req, res) => {
        return res.send('hello world')
    })


    return app.use("/", router)
}

export default initWebRouters;