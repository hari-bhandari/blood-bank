import express from "express";
import {getDonor,getDonors} from "../controllers/donors.js";
import User from "../models/User.js";
import {advancedResults} from '../middlewares/advancedResult'
const router = express.Router({ mergeParams: true });


router
    .route('/')
    .get(advancedResults(User), getDonors)

router
    .route('/:id')
    .get(getDonor);

export default router
