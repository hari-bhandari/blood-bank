import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import connectDB from './config/db.js'
import {errorHandler} from './middlewares/error.js'
const app=express()
import auth from './routes/auth.js'
import blood from './routes/blood.js'
app.use(express.json());

const PORT= process.env.PORT||5000
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
app.use('/api/auth',auth)
app.use('/api/help',blood)
//error
app.use(errorHandler)

//implementing error handler
const server=app.listen(PORT,()=>console.log(`server running in Production mode on port ${PORT}`))

//handle unhandled promised rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`error:${err.message}`)
    server.close(()=>process.exit(1))
});
