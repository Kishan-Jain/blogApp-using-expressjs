import express from "express";
import { home } from "../controllers/homeController.js";
import { about } from "../controllers/aboutController.js";
import { faq } from "../controllers/faqController.js";
import { features } from "../controllers/featuresController.js";

const mainRouter = express.Router()

mainRouter.get('/', home);
mainRouter.get('/about', about);
mainRouter.get('/features', features);
mainRouter.get('/faq', faq);

export {mainRouter}