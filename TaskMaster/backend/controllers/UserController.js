import UserModel from "../models/UserModel.js";

export const profile = async (req, res) => {
    try {

        const user = await UserModel.findById(req.user.id).select('-password');

        res.status(200).json({ message: "Profile retrieved successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving profile", error: error.message });
    }
};