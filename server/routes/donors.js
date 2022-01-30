import express from "express";
import {getDonor,getDonors,getDonorEmail,getDonorPhoneNumber} from "../controllers/donors.js";
import User from "../models/User.js";
import {advancedResults} from '../middlewares/advancedResultForUser.js'
import auth from "./auth.js";
import {protect} from "../middlewares/auth.js";
const router = express.Router({ mergeParams: true });

router
    .route('/')
    .get(advancedResults(User), getDonors)

router.route('/email/:id').get(protect,getDonorEmail)
router.route('/phone/:id').get(protect,getDonorPhoneNumber)
router
    .route('/:id')
    .get(getDonor);

export default router
