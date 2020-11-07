import express from 'express'
import {requestForDonor} from '../controllers/blood.js'
const router=express.Router();
router.route('/req').post(requestForDonor);
export default router
