import fs from 'fs'
import mongoose from 'mongoose'
import User from "./models/User.js";
import Blood from "./models/Blood.js";
import path from 'path'

// Connect to DB
mongoose.connect('mongodb+srv://hari:hari@bloodback.juzpj.mongodb.net/bloodbank?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// Read JSON files
const __dirname = path.resolve();
const users = JSON.parse(
    fs.readFileSync(`${__dirname}/Content/users.json`, 'utf-8')
);
const bloods=JSON.parse(
    fs.readFileSync(`${__dirname}/Content/BloodRequests.json`, 'utf-8')

)

// Import into DB
const importData = async () => {
    try {
        await User.create(users);
        await Blood.create(bloods);
        console.log('Data Imported...');
        process.exit();
    } catch (err) {
        console.error(err);
    }
};

// Delete data
const deleteData = async () => {
    try {
        await User.deleteMany();
        await Blood.deleteMany();
        process.exit();
    } catch (err) {
        console.error(err);
    }
};

if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
}