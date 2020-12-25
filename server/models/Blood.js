import mongoose from 'mongoose'
import districts from "../data/districts.js";
import slug from 'mongoose-slug-generator'
//Initialize
mongoose.plugin(slug);
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
        message: {
            type: String,
            required: [true, 'Please add a description'],
            maxlength: [500, 'Description can not be more than 500 characters']
        },
        phone: {
            type: String,
            maxlength: [12, 'Phone number can not be longer than 10 characters']
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
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        expire: {
            type: Date
        },
        image: {
            type:String,
            default:'noImage.png'
        },
        id:{
            type:String,
            slug:["name","district"],
            unique: true
        },
        travel:{
            type:Boolean,
            default: false
        },
        helpers:{//lists those people who offer to help
            type:Array,
            default:[]
        }
    });

export default mongoose.model('Blood', BloodSchema)