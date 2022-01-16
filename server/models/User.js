import mongoose from 'mongoose'
import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Cryptr from 'cryptr'

import districts from "../data/districts.js";
//Initialize
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add your name']
    },
    email: {
        type: String,
        required: [true, 'please add an email'],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ],
        unique: true
    },
    age: {
        type: Number,
        min: [17, 'You must be at least 17 years old to donate blood '],
        max: [66, 'You can\'t donate blood if you are over 65 years old '],
        required:[true,"Age filed seems empty!"]
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minLength: 6,
        maxLength: 30,
        select: false
    },
    phone: {
        type: String,
        match:  [
            /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/,
            'Please add a valid phone number'
        ],
    },
    image: {
        type: String,
        default:null
    },
    bloodType: {
        type: String,
        required: [true, 'Please specify a blood type'],
        enum: ['A+', 'A-', 'B+', 'B-', 'C-', 'C+', 'O+', 'O-', 'AB+', 'AB-']
    },
    district: {
        type: String,
        required: [true, 'Please enter your district'],
        enum: districts
    },
    shareInformation: {
        type: Boolean,
        required: true
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now
    },
    confirmEmailToken: String,
    isEmailConfirmed: {
        type: Boolean,
        default: false,
    },

});

// Encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
const cryptr = new Cryptr('myTotallySecretKey');
// Encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
    if (!this.isModified('shareInformation')) {
        next();
    }

    if (!this.shareInformation) {
        const encryptedNumber = cryptr.encrypt(this.phone)
        this.phone = encryptedNumber
    }

});

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Generate and hash password token
UserSchema.methods.getResetPasswordToken = function () {
    // Genereate token
    const resetToken = crypto.randomBytes(20).toString('hex');

    // Hash token and set to resetPasswordToken field
    this.resetPasswordToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

    // Set expire
    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

    return resetToken;
};
// Generate email confirm token
UserSchema.methods.generateEmailConfirmToken = function (next) {
    // email confirmation token
    const confirmationToken = crypto.randomBytes(20).toString('hex');

    this.confirmEmailToken = crypto
        .createHash('sha256')
        .update(confirmationToken)
        .digest('hex');

    const confirmTokenExtend = crypto.randomBytes(100).toString('hex');
    const confirmTokenCombined = `${confirmationToken}.${confirmTokenExtend}`;
    return confirmTokenCombined;
};
export default mongoose.model('User', UserSchema)