import mongoose from 'mongoose' //importing mongoose
//connecting to mongodb
const connectDB=async ()=>{
    const conn=await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
    console.log(`mongoDB connected: ${conn.connection.host}`) //logging host


}
export default connectDB
