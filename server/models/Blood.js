import mongoose from 'mongoose'

const BloodSchema =mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
            unique: true,
            trim: true,
            maxlength: [50, 'Name can not be more than 50 characters']
        },
        bloodType:{
            type:String
        },
        description: {
            type: String,
            required: [true, 'Please add a description'],
            maxlength: [500, 'Description can not be more than 500 characters']
        },
        phone: {
            type: String,
            maxlength: [10, 'Phone number can not be longer than 10 characters']
        },
        email: {
            type: String,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please add a valid email'
            ]
        },
        address: {
            type: String,
            required: [true, 'Please add an address']
        },
        isDonation: {
            type: Boolean,
            default: false
        },
        hospitalName: {
            type: String,
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        }
    });

export default mongoose.model('Blood',BloodSchema)