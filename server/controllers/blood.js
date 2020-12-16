import Blood from "../models/Blood.js";
import asyncHandler from "../middlewares/async.js";
import User from "../models/User.js";
import ErrorResponse from "../utils/errorResponse.js";
import path from 'path'
export const requestForDonor=  asyncHandler(async (req,res,next)=>{
    //add user to req.body
    req.body.user=req.user.id;
    const user=User.findById(req.user.id)

    //check for published bootcamps
    const request=await Blood.create(req.body)
    res.status(201).json({
        success:true,
        data:request
    })
});
export const beADonor=  asyncHandler(async (req,res,next)=>{
    //add user to req.body
    req.body.user=req.user.id;
    //check for published bootcamp

    req.body.isDonation=true

    const request=await Blood.create(req.body)
    res.status(201).json({
        success:true,
        data:request
    })
});

export const getBloodRequests=asyncHandler(async  (req,res,next)=>{
    res.status(200).json(res.advancedResults)
})
//@desc Get single  bootcamp
//@route GET /api/v1/bootcamp:id
//@access Public
export const getBloodRequest=asyncHandler(async (req,res,next)=>{
    const blood=await Blood.findById(req.params.id)
    if(!blood){
        return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`,404))
    }
    res.status(200).json({
        success:true,
        data:blood
    })
})
//@desc upload photo for item
//@route PUT /api/v1/item/:id/photo
//@access private
export const patientPhoto=asyncHandler(async (req,res,next)=> {
    const blood=await Blood.findById(req.params.id);
    if(!blood){
        return next(new ErrorResponse(`Item not found with id of ${req.params.id}`,404))
    }
    if(!req.files){
        return next(new ErrorResponse(`Please upload a file`,400))
    }
    const file=req.files.file;
    if(!file.mimetype.startsWith('image')){
        return next(new ErrorResponse(`Please upload an image file`,400))
    }
    if(file.size>1000000){
        return next(new ErrorResponse(`Please upload an image file less than 2MB`,400))
    }

    //create custom file name
    file.name=`photo_${req.params.id}${path.parse(file.name).ext}`
    file.mv(`./public/uploads/${file.name}`, async err=>{
        if(err){
            console.error(err)
            return next(new ErrorResponse(`problem with file upload `,500))
        }
        await Blood.findByIdAndUpdate(req.params.id,{images:file.name});
        res.status(200).json({
            success:true,
            data:file.name
        })
    })
})