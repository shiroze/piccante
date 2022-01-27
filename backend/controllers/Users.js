import User from "../models/userModel.js";

export const getAllUser = async (req, res) => {
    try {
        const users = await User.findAll()
        res.json(users)
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.headers.username,
                password: req.headers.password
            }
        });
        
        if(user === null){
            res.json({
                message: "Login Gagal",
                authenticated: false
            })
        } else {
            res.json({
                message: "Login Berhasil",
                authenticated: true
            })
        }
    } catch (error) {
        res.json({
            message: "Login Gagal",
            authenticated: false
        })
    }
    
}

export const createUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.json({
            "message": "User Created"
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
    
}