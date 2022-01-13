import Blood from "../models/Blood.js";
import asyncHandler from "../middlewares/async.js";
import User from "../models/User.js";
import ErrorResponse from "../utils/errorResponse.js";
import path from 'path'

export const requestForDonor = asyncHandler(async (req, res, next) => {
    //add user to req.body
    req.body.user = req.user.id;
    const user = User.findById(req.user.id)
    if (!user) {
        return next(new ErrorResponse(`You have to be logged in to make a request.`, 401))
    }
    const dateNow = new Date();
    const expiryDate = dateNow.setDate(dateNow.getDate() + req.body.runFor);
    req.body.inActiveAt = expiryDate
    const request = await Blood.create(req.body)
    res.status(201).json({
        success: true,
        data: request
    })
});
export const beADonor = asyncHandler(async (req, res, next) => {
    //add user to req.body
    req.body.user = req.user.id;
    //check for published request

    req.body.isDonation = true

    const request = await Blood.create(req.body)
    res.status(201).json({
        success: true,
        data: request
    })
});

export const getBloodRequests = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults)
})
//@desc delete
//@route GET
//@access Public
export const deleteRequest = asyncHandler(async (req, res, next) => {
    const blood = await Blood.findOne({id: req.params.id})
    if (!blood) {
        return next(new ErrorResponse(`Request not found with id of ${req.params.id}`, 404))
    }
    console.log(blood.user.toString(), req.user.id)
    if (blood.user.toString() !== req.user.id) {
        return next(new ErrorResponse(`User ${req.params.id} is not authorized to delete this bootcamp`, 401));
    }
    blood.remove();
    res.status(200).json({
        success: true,
        data: `Succesfully removed request with the patient name of ${blood.name}`
    });
})
//@desc delete
//@route GET
//@access Public
export const deleteRequest = asyncHandler(async (req, res, next) => {
    const blood = await Blood.findOne({id: req.params.id})
    if (!blood) {
        return next(new ErrorResponse(`Request not found with id of ${req.params.id}`, 404))
    }
    console.log(blood.user.toString(), req.user.id)
    if (blood.user.toString() !== req.user.id) {
        return next(new ErrorResponse(`User ${req.params.id} is not authorized to delete this bootcamp`, 401));
    }
    blood.remove();
    res.status(200).json({
        success: true,
        data: `Successfully removed request with the patient name of ${blood.name}`
    });
})
//@desc Get single request
//@route GET
//@access Public
export const getBloodRequest = asyncHandler(async (req, res, next) => {
    const blood = await Blood.findOne({_id: req.params.id})
    if (!blood) {
        return next(new ErrorResponse(`User not found with id of ${req.params.id}`, 404))
    }
    res.status(200).json({
        success: true,
        data: blood
    })
})

export const getBunchOfDonors = asyncHandler(async (req, res, next) => {
    const blood = await Blood.findById(req.params.id);
    if (!blood) {
        return next(new ErrorResponse(`Request not found`, 400))
    }
    if (blood.user.toHexString() != req.user.id) {
        return next(new ErrorResponse(`You don't own this request`, 400))
    }
    const users = await User.find({'_id': {$in: blood.helpers}})

    res.status(200).json({
        success: true,
        data: users
    })


})
