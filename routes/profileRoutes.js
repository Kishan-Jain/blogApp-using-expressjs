import express from "express";
import {login, register, profile} from "../controllers/profileController.js";

const profileRouter = express.Router()

profileRouter.get('/', profile);
profileRouter.get('/login', login);
profileRouter.get('/register', register);


export {profileRouter}