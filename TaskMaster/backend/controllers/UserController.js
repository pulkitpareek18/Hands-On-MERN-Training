import UserModel from "../models/UserModel.js";
import jwt from 'jsonwebtoken';

export const profile = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "pulkit-secret-key");

        const user = await UserModel.findById(decoded.id).select('-password');

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "Profile retrieved successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving profile", error: error.message });
    }
};