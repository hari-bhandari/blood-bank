import User from "../models/User.js";
import asyncHandler from "../middlewares/async";
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