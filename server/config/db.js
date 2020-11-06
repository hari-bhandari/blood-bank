import mongoose from 'mongoose' //importing mongoose
//connecting to mongodb
const connectDB=async ()=>{
    const conn=await mongoose.connect('mongodb+srv://hari:hari@cluster0.humga.mongodb.net/discordClone?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
    console.log(`mongoDB connected: ${conn.connection.host}`) //logging host


}
export default connectDB