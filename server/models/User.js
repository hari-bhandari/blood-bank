import mongoose from 'mongoose'
import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please add your name']
    },
    email: {
        type: String,
        required: [true,'please add an email'],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please add a password'],
        minLength:6,
        maxLength:30,
        select:false
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
    createdAt: {
        type:Date,
        default: Date.now
    }



});
UserSchema.pre('save',async function(next) {
    if(!this.isModified('password')){
        next();
    }
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt)
});

//sign jwt and return
UserSchema.methods.getSignedJwtToken=function(){
    return jwt.sign({id:this._id},'JWT_SECRET',{
        expiresIn:'30d'
    })
}
//Match user entered password to hashed password
UserSchema.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}
//Generate and hash
UserSchema.methods.getResetPasswordToken=function(){
    //generate Token
    const resetToken=crypto.randomBytes(20).toString('hex');

    //Hash token and set tp reset password token field
    this.resetPasswordToken=crypto.createHash('sha256').update(resetToken).digest('hex');
    //set expire
    this.resetPasswordExpire=Date.now()+5*60*1000;
    return resetToken;
}
export default mongoose.model('User',UserSchema)