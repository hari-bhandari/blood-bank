import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import connectDB from './config/db.js'
const app=express()
import auth from './routes/auth.js'
app.use(express.json());

const PORT= process.env.PORT||5000
app.use('/api/auth',auth)
connectDB()
////////////////////////////////

//config

//Body parser
//connecting to db
//implementing helmet
app.use(helmet())
//cors
app.use(cors())
//routes

//implementing error handler
const server=app.listen(PORT,()=>console.log(`server running in Production mode on port ${PORT}`))

//handle unhandled promised rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`error:${err.message}`)
    server.close(()=>process.exit(1))
});
