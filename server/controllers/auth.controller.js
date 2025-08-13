import bcrypt from "bcryptjs";

import User from "../models/user.model.js";

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


export const login = (req, res) => {
    console.log("login user");
}

export const logout = (req, res) => {
    console.log("logout user");
}