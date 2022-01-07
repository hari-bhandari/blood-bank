import {dURIFormatter} from "../config/dURIFormatter.js";
import {uploader} from '../config/cloudinary.js'
import asyncHandler from '../middlewares/async.js'
// @desc    Upload Image
// @route   GET /api/products/top
// @access  Public
const uploadImage = asyncHandler(async (req, res) => {
    if(req.files){
        let links=[]
        const files = req.files;
        for (const file of files) {
            const path = dURIFormatter(file.originalname,file.buffer).content;
            const result=await uploader.upload(path)
            links.push(result.url)
        }
        res.status(200).json({
            imgLinks:links
        })
    }}
)

export default uploadImage