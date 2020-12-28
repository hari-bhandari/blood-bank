import User from '../models/User.js'
import asyncHandler from "../middlewares/async.js";
import ErrorResponse from "../utils/errorResponse.js";
import Blood from "../models/Blood.js";
import mongoose from 'mongoose'
const ObjectId=mongoose.ObjectId

//@desc register a user
//@route POST /api/auth/register
//@access Public
export const register=asyncHandler(async (req, res, next)=>{
    const {email}=req.body;
    //Create user
    const user=await User.create(
        req.body
    );
    //Create web token and send it
    sendTokenResponse(user,200,res)

})
//@desc get current logged in user
//@route GET /api/auth/me
//@access Private
export const getMe=asyncHandler(async (req, res, next)=>{
    const user=await User.findById(req.user.id);
    if(!user){
        return next(new ErrorResponse(`User not found`,400))
    }
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

//@desc offer to help
//@route post
//@access Public
export const offerHelp=asyncHandler(async (req, res, next)=>{
    const user=await User.findById(req.user.id);
    if(!user){
        return next(new ErrorResponse(`You must be logged in to offer help`,400))
    }
    let blood=await Blood.findById(req.params.id)
    if(!blood){
        return next(new ErrorResponse(`Please make sure you are offering help to a valid request.`,400))
    }
    const {helpers}=blood
    for(const value of helpers){
        if(value==user._id.toHexString()){
            return next(new ErrorResponse(`You have already offered your help.`,400))
        }
    }
    blood=await Blood.findByIdAndUpdate(req.params.id,{ $push: { helpers: user._id } },{
        new:true,
        runValidators:true
    })
    res.status(200).json({
        success:true,
        data:blood
    })

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
//@desc get current logged in user
//@route GET /api/auth/me
//@access Private
export const getMyRequests=asyncHandler(async (req, res, next)=>{
    const id=req.user._id
    const requests=await Blood.find({user:id})
    res.status(200).json({
        success:true,
        data:requests
    })
})