import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import helmet from 'helmet'
import cors from 'cors'
import connectDB from './config/db.js'
import {errorHandler} from './middlewares/error.js'
import auth from './routes/auth.js'
import blood from './routes/blood.js'
import donors from './routes/donors.js'
import Path from 'path'
import {resizingMiddleware} from "./middlewares/resizeImage.js";
const app=express()
import {cloudinaryConfig} from "./config/cloudinary.js";
import {multerUploads} from "./config/dURIFormatter.js";
import uploadRoute from './routes/upload.js'
import sendEmail from "./config/sendEmail.js";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT= process.env.PORT||5000
import emailTemplate from "./config/emailTemplate.js";
connectDB()
////////////////////////////////
//config
app.use('*', cloudinaryConfig);

//implementing helmet
app.use(helmet())
//
//cors
app.use(cors())
//routes
app.use('/api/auth',auth)
app.use('/api/help',blood)
app.use('/api/donors',donors)
app.use('/upload',multerUploads,uploadRoute)
//error
app.use(errorHandler)
const __dirname = Path.resolve()
app.use(express.static(Path.join(__dirname,'./public')))
app.use('/(*_\\d+x\\d+.(jpe?g|png))', resizingMiddleware);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(Path.join(__dirname, '/client/build')))

    app.get('*', (req, res) =>
        res.set("Content-Security-Policy", "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'").send(Path.resolve(__dirname, 'client', 'build', 'index.html'))

    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}

//implementing error handler
const server=app.listen(PORT,()=>console.log(`server running in Production mode on port ${PORT}`))

//handle unhandled promised rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`error:${err.message}`)
    server.close(()=>process.exit(1))
});
