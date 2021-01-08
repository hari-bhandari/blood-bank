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
import Path from 'path'
import mime from 'mime-types'
import sharp from 'sharp'
const app=express()

app.use(express.json());

const PORT= process.env.PORT||5000
connectDB()
////////////////////////////////

//config

//Body parser
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
const __dirname = Path.resolve()
app.use(express.static(Path.join(__dirname,'./public/uploads')))
app.use('/(*_\\d+x\\d+.(jpe?g|png))', resizingMiddleware);
function resizingMiddleware(req, res, next)  {
    const data = parseResizingURI(req.baseUrl); // Extract data from the URI

    if (!data) { return next(); } // Could not parse the URI

    // Get full file path in public directory
    const path = Path.join(__dirname, 'public/uploads', data.path);

    resizeImage(path, data.width, data.height)
        .then(buffer => {
            // Success. Send the image
            res.set('Content-type', mime.lookup(path)); // using 'mime-types' package
            res.send(buffer);
        })
        .catch(next); // File not found or resizing failed
}

function resizeImage(path, width, height) {
    console.log(path)
    return sharp(path).resize({
        width,
        height,
        // Preserve aspect ratio, while ensuring dimensions are <= to those specified
        fit: sharp.fit.inside,
    }).toBuffer();
}

function limitNumberToRange(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

function parseResizingURI(uri) {
    // Attempt to extract some variables using Regex
    const matches = uri.match(
        /(?<path>.*\/)(?<name>[^\/]+)_(?<width>\d+)x(?<height>\d+)(?<extension>\.[a-z\d]+)$/i
    );

    if (matches) {
        const { path, name, width, height, extension } = matches.groups;
        return {
            path: path + name + extension, // Original file path
            width: limitNumberToRange(+width, 16, 2000),   // Ensure the size is in a range
            height: limitNumberToRange(+height, 16, 2000), // so people don't try 999999999
            extension: extension
        };
    }
    return false;
}

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
