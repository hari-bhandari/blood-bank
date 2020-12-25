import express from 'express'
import {register,login,getMe,offerHelp} from '../controllers/auth.js'
import {protect} from "../middlewares/auth.js";

const router=express.Router();
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/me').get(protect,getMe)
router.route('/offer/:id').post(protect,offerHelp)
export default router
