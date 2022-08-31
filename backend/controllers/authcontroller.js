const User = require('../models/user')
const ErrorHandler = require('../utils/errorHandler')
const sendToken = require('../utils/jwtToken')
const  crypto = require('crypto')
const { send } = require('process')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

// register a user  => /api/v1/register

exports.registerUser =catchAsyncErrors( async (req, res, next) => {
 
const {name , email , password  } = req.body
const user = await User.create({
    name,
    email,
    password,
})

sendToken(user, 200, res)
 }) 


  //login user => /api/v1/login

  exports.loginUser =  async (req, res, next) => {
    const {name , password } = req.body

    //checks if email and password is entred by user 
    if (!name || !password){
         return next(new ErrorHandler('please enter email and password',400))
    }

    //finding user in DB
    const user = await User.findOne({ name}).select('+password')

    if(!user){
       return next(new ErrorHandler('Invalid name or password ',401))
    }
    //checks if password is correct or not
    const isPasswordMatched = await user.comparePassword(password)
    if(!isPasswordMatched){
       return next(new ErrorHandler('Invalid name or password ',401))
    }
    sendToken(user, 200, res)
} 

 // Logout user  => /api/v1/logout
 
 exports.logout = async (req,res,next) => {
    res.cookie('token' , null, {
        expires: new Date(Date.now()),
        httpOnly: true

    })

    res.status(200).json({
        success: true,
        message: 'Logged out'
     })
}