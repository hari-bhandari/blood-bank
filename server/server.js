import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import helmet from 'helmet'
import cors from 'cors'
import connectDB from './config/db.js'
import fileUpload from 'express-fileupload'
import {errorHandler} from './middlewares/error.js'
import auth from './routes/auth.js'
import blood from './routes/blood.js'
import donors from './routes/donors.js'
import path from 'path'
const app=express()

app.use(express.json());

const PORT= process.env.PORT||5000
connectDB()
////////////////////////////////

//config

//Body parser
//connecting to db
app.use(fileUpload())
//implementing helmet

app.use(helmet())
//cors
app.use(cors())
//routes
app.use('/api/auth',auth)
app.use('/api/help',blood)
app.use('/api/donors',donors)
//error
app.use(errorHandler)
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
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
