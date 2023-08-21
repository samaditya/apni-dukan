import express from 'express';
import productRoutes from './routes/productRoutes.js'
import { notFound , errorHandler } from './middleware/errorMiddleware.js';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';
connectDB();
 
const port = process.env.PORT||8000;

const app = express();

app.get('/', (req , res)=>{
    res.send("Api Hit")
})

app.use('/api/products' , productRoutes);
app.use(notFound)
app.use(errorHandler)

app.listen(port , ()=>{
    console.log(`Server running on ${port}`);
})