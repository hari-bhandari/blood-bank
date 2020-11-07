import Blood from "../models/Blood.js";
import asyncHandler from "../middlewares/async.js";
import ErrorResponse from "../utils/errorResponse.js";

export const requestForDonor=  asyncHandler(async (req,res,next)=>{
    //add user to req.body
    req.body.user=req.user.id;
    //check for published bootcamps
    const request=await Blood.create(req.body)
    res.status(201).json({
        success:true,
        data:request
    })




});

// export const getBloodRequests=asyncHandler(async  (req,res,next)=>{
//     res.status(200).json(res.advancedResults)
// })
// //@desc Get single  bootcamp
// //@route GET /api/v1/bootcamp:id
// //@access Public
// export const getBootcamp=asyncHandler(async (req,res,next)=>{
//     const bootcamp=await Bootcamp.findById(req.params.id)
//     if(!bootcamp){
//         return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`,404))
//     }
//     res.status(200).json({
//         success:true,
//         data:bootcamp
//     })
// })