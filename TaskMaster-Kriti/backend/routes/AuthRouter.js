import {register, login, logout} from '../controllers/AuthController.js';

import express from 'express';
const router = express.Router();

// Registration route
router.post('/register', register);

// Login route
router.post('/login', login);

// Logout route
router.post('/logout', logout);

export default router;