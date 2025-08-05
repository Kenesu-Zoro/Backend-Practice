import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res) =>{
    res.send("hello there mathafakas!")
})

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("MongoDB connected!")
    app.listen(PORT,()=>{
        console.log(`Serving on port : ${PORT}`) // synatx : ${x} it should be inside `` not '' or ""
    })
})
.catch(() => {
    console.error("Something went wrong when connecting to the Database !")
})