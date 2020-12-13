import User from "../models/User.js";
import asyncHandler from "../middlewares/async";
// @desc      Get all Donors
// @route     GET /api/v1/Donors
// @access    public
exports.getDonors = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

// @desc      Get single user
// @route     GET //Donors/:id
// @access    public
exports.getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    res.status(200).json({
        success: true,
        data: user
    });
});

// @desc      Delete user
// @route     DELETE /api/v1/Donors/:id
// @access    Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true,
        data: {}
    });
});