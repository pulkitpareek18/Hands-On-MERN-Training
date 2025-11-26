// Auth Middleware to protect routes and verify JWT token and store user info in req.user

import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: "Please Login First" });
        }

        const decoded = jwt.verify(token, "pulkit-secret-key");

        req.user = {
            id: decoded.id,
            email: decoded.email
        };

        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized", error: error.message });
    }
};

export default authMiddleware;