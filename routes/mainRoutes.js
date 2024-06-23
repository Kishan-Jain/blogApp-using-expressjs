import express from "express";
import {home, about, faq, features} from "../controllers/mainController.js";


const mainRouter = express.Router()

mainRouter.get('/', home);
mainRouter.get('/about', about);
mainRouter.get('/features', features);
mainRouter.get('/faq', faq);

export {mainRouter}