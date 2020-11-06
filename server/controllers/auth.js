import User from '../models/User.js'
import asyncHandler from "../middlewares/async.js";
import ErrorResponse from "../utils/errorResponse.js";
//@desc register a user
//@route POST /api/v1/auth/register
//@access Public
export const register=asyncHandler(async (req, res, next)=>{
    const {name,email,password,role}=req.body;
    const isUser=User.findOne({email})
    console.log(isUser.email)
    //Create user
    const user=await User.create({
        name,
        email,
        password,
        role
    });
    //Create web token and send it
    sendTokenResponse(user,200,res)

})
//@desc get current logged in user
//@route GET /api/auth/me
//@access Private
export const getMe=asyncHandler(async (req, res, next)=>{
    const user=await User.findById(req.user.id);

    res.status(200).json({
        success:true,
        data:user
    })
})
//@desc register a user
//@route POST /api/v1/auth/login
//@access Public
export const login=asyncHandler(async (req, res, next)=>{
    const {email,password}=req.body;
    //Validate email and password
    if(!email||!password){
        return next(new ErrorResponse(`Please provide user or a password`,400))
    }
    //check for a user
    const user=await User.findOne({email}).select('+password');
    if(!user){
        return next(new ErrorResponse(`Please provide valid user or a password`,401))
    }
    //check if password matches
    const isMatch=await user.matchPassword(password)
    if(!isMatch){
        return next(new ErrorResponse(`Please provide valid user or a password`,401))
    }
    sendTokenResponse(user,200,res)

})


//get token from model,create cookie and send
// response
const sendTokenResponse=(user,statusCode,res)=>{
    //Create web token
    const token=user.getSignedJwtToken();
    const options={
        expires:new Date(Date.now()+30*24*60*60*1000),
        httpOnly:true,
    }
    if(process.env.NODE_ENV==='production'){
        options.secure=true
    }
    res.status(statusCode).cookie('token',token,options).json({
        success:true,
        token
    })
}
