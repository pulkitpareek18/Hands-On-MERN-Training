import UserModel from '../models/UserModel.js';
import jwt from 'jsonwebtoken';


export const register = async (req, res) => {
    try {
        const {email, password, name} = req.body;

        const existingUser = await UserModel.findOne({email});
        if (existingUser) {
            return res.status(400).json({message: 'User already exists'});
        }

        const newUser = new UserModel({email, password, name});
        await newUser.save();

        res.status(201).json({message: 'User registered successfully', user: newUser});


    } catch (error) {

        res.status(500).json({message: 'Registration failed', error});

    }
};


export const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await UserModel.findOne({email, password});

        // If user does not exist with these credentials
        if (!user) {
            return res.status(400).json({message: 'Invalid credentials'});
        }

        // If user exists, create a JWT token
        const token = jwt.sign(
            {id: user._id, email: user.email},
            "pulkit-secret-key"
        )

        res.status(200).json({message: 'Login successful', token});

    } catch (error) {
        res.status(500).json({message: 'Login failed', error});
    }
};