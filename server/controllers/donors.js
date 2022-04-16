import User from "../models/User.js";
import asyncHandler from "../middlewares/async.js";
import ErrorResponse from "../utils/errorResponse.js";
// @desc      Get all Donors
// @route     GET /api/v1/Donors
// @access    public
export const getDonors = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

// @desc      Get single Donor
// @route     GET //Donors/:id
// @access    public
export const getDonor = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    res.status(200).json({
        success: true,
        data: user
    });
});
// @desc      Get single Donor
// @route     GET /Donors/email/:id
// @access    public
export const getDonorEmail = asyncHandler(async (req, res, next) => {
    const loggedInUser = await User.findById(req.user.id);

    if (!loggedInUser) {
        return next(new ErrorResponse(`You must be logged in to see user details!Please log in now`, 400))
    }
    const user = await User.findById(req.params.id);
    // if (loggedInUser.bloodType !== user.bloodType) {
    //     return next(new ErrorResponse(`You can only view details of user of your type`, 400))
    // }
    res.status(200).json({
        success: true,
        data: user.email
    });
});
// @desc      Get single Donor
// @route     GET /Donors/email/:id
// @access    public
export const getDonorPhoneNumber = asyncHandler(async (req, res, next) => {
    const loggedInUser = await User.findById(req.user.id);
    if (!loggedInUser) {
        return next(new ErrorResponse(`You must be logged in to see user details!Please log in now`, 400))
    }
    const user = await User.findById(req.params.id);
    // if (loggedInUser.bloodType !== user.bloodType) {
    //     return next(new ErrorResponse(`You can only view details of user of your type`, 400))
    // }
    res.status(200).json({
        success: true,
        data: user.phone
    });
});
// @desc      Delete user
// @route     DELETE /api/v1/Donors/:id
// @access    Private/Admin
export const deleteUser = asyncHandler(async (req, res, next) => {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true,
        data: {}
    });
});