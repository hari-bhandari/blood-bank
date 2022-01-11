import mongoose from 'mongoose'
import districts from "../data/districts.js";
//Initialize
const BloodSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
            trim: true,
            maxlength: [50, 'Name can not be more than 50 characters']
        },
        bloodType:{
            type:String,
            required: [true, 'Please specify a blood type'],
            enum:['A+','A-','B+','B-','C-','C+','O+','O-','AB+','AB-']
        },
        requestMessage: {
            type: String,
            required: [true, 'Please add a description'],
            maxlength: [500, 'Description can not be more than 500 characters']
        },
        phone: {
            type: String,
            match:  [
                /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/,
                'Please add a valid phone number'
            ],
        },
        email: {
            type: String,
            required: [true, 'please add an email'],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please add a valid email'
            ],
        },
        district:{
            type:String,
            required: [true, 'Please enter your district'],
            enum:districts
        },
        hospitalName: {
            type: String,
            required:true
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        inActiveAt: {
            type: Date,
            required:true
        },
        volume:{
          type:Number,
          required:true
        },
        image: {
            type:String,
            default:null
        },
        age:{
            type:Number,
            required:true
        },
        expenses:{
            type:Boolean,
            default: false
        },
        helpers:{//lists those people who offer to help
            type:Array,
            items: { type: mongoose.Schema.ObjectId, uniqueItems: true },
            default:[]
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    });

export default mongoose.model('Blood', BloodSchema)