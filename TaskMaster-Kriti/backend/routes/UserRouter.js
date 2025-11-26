import { profile } from "../controllers/UserController.js";

import express from "express";
const router = express.Router();

// Profile route
router.get('/profile', profile);

export default router;