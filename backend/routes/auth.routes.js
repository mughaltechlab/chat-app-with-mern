import express from "express";
import {signup, login, logout} from "../controllers/auth.controllers.js";

const router = express.Router();

// :: SIGNUP
router.post('/signup',signup);
// :: LOGIN
router.post('/login',login);
// :: LOGOUT
router.post('/logout',logout);


export default router;