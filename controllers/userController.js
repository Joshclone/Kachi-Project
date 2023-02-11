// import User from "../models/user.model.js"
const User = require("../models/userSchema");



const getAllUser = async ( req, res ) =>
{ 
    try {
        const users = await User.find()

        return res.status( 200 ).json( {
            success: true,
            message: "Users fetched successfully",
            data: {
                users
            }
        })
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message,
            error_code: e.code,
            data: {}
        })
    }
 }
const getUserbyId = async (req, res) => {
    try {
        const { id } = req.params
        
        const user = await User.findById(id);
        //if no user is found return error status 404
        if (!user) return res.status(404).json({
            success: false,
            message: 'User not found',
            error_code: 404,
            data: {}
        });

        return res.status(200).json({
            success: false,
            message: 'User successfully retrieved',
            data: {
                user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                   
                }
            }
        })
    } catch (e) {
        return res.status(404).json({
            success: false,
            message: e.message,
            error_code: e.code,
            data: {}
        })
    }

};

module.exports = {
    
    getAllUser,
    getUserbyId
        
}