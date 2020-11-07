import express from 'express'
import {requestForDonor} from '../controllers/blood.js'
import {advancedResults} from "../middlewares/advancedResult.js";
import {authorize,protect} from '../middlewares/auth.js'

const router=express.Router();
router.route('/req').post(protect,requestForDonor);
export default router
