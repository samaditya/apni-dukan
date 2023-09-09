import express from 'express';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import { notFound , errorHandler } from './middleware/errorMiddleware.js';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';


dotenv.config();

import connectDB from './config/db.js';
connectDB();
 
const port = process.env.PORT||8000;

const app = express();
// Allow requests from any origin
app.use(cors());

//body parser middleware
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req , res)=>{
    res.send("Api Hit")
})

app.use('/api/products' , productRoutes);
app.use('/api/users' , userRoutes);
app.use('/api/orders' , orderRoutes);

app.use(notFound)
app.use(errorHandler)

app.listen(port , ()=>{
    console.log(`Server running on ${port}`);
})