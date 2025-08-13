import bcrypt from "bcryptjs";

import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generate_token.js";

export const signup = async (req, res) => {
    try {
        const { fullname, username, gender, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            res.status(400).json({ error: "Password doesn't match" })
        }

        const user = await User.findOne({ username })

        if (user) {
            return res.status(400).json({ error: "username already exists." })
        }

        const salt = await bcrypt.genSalt(10)
        const hasedPassword = await bcrypt.hash(password, salt)

        // creating default profile picture for the new registered user
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`


        const newUser = new User({
            fullname,
            username,
            password: hasedPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        })

        if (newUser) {
            // Generate jwt token 
            generateTokenAndSetCookie(newUser._id, res) -
                await newUser.save()

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({ error: "User not created" })
        }


    } catch (error) {
        console.log(`Error in signup controller: ${error.message}`);
        res.status(500).json({ error: "Internal Server error" })
    }
}


export const login = async (req, res) => {
    try {

        const { username, password } = req.body;
        const user = await User.findOne({ username });

        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if (!user || !isPasswordCorrect) {
            res.status(400).json({ error: "Invalid username or password." })
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic
        })


    } catch (error) {
        console.log(`Error in login controller: ${error.message}`);
        res.status(500).json({ error: "Internal Server error" })
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ message: "Logged out successfully" })

    } catch (error) {
        console.log(`Error in logout controller: ${error.message}`);
        res.status(500).json({ error: "Internal Server error" })
    }
}