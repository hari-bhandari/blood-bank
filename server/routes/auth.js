import express from 'express'
import {register,login,getMe} from '../controllers/auth.js'
const router=express.Router();
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/me').get(getMe)
export default router
