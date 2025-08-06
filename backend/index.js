import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Product } from './models/product.model.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello there mathafakas!")
})

app.post('/api/v1/product', async (req, res) => {
    try {
        const productDetails = await Product.create(req.body);
        res.status(201).json(productDetails)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.get('/api/v1/get-product', async (req, res) => {
    try {
        const getProductDetails = await Product.find({})
        res.status(200).json(getProductDetails)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected!")
        app.listen(PORT, () => {
            console.log(`Serving on port : ${PORT}`) // synatx : ${x} it should be inside `` not '' or ""
        })
    })
    .catch(() => {
        console.error("Something went wrong when connecting to the Database !")
    })