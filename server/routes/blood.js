import express from 'express'
import {beADonor, requestForDonor, getBloodRequests, patientPhoto, getBloodRequest} from '../controllers/blood.js'
import {advancedResults} from "../middlewares/advancedResult.js";
import {protect} from '../middlewares/auth.js'
import Blood from "../models/Blood.js";

const router=express.Router();
router.route('/').get(advancedResults(Blood),getBloodRequests);
router.route('/:id').get(getBloodRequest);

router.route('/req').post(protect,requestForDonor);
router.route('/beADonor').post(protect,beADonor);
router.route('/:id/photo').put(protect,patientPhoto);

export default router
