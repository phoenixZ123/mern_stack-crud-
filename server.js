import express from 'express'
import dotenv from 'dotenv'
import router from './routes/router.js';
import dbConnect from './models/db.js';

const app = express();
dotenv.config({ path: ".env" });
dbConnect()

const port = process.env.PORT;

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/', router)

app.listen(port, () => {
    console.log(`server is running on port ${port}`);


})