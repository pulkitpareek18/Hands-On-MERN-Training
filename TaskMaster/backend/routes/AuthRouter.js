import {register, login} from '../controllers/AuthController.js';

import express from 'express';
const router = express.Router();

// Registration route
router.post('/register', register);

// Login route
router.post('/login', login);

export default router;