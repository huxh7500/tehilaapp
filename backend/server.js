import dotenv from 'dotenv'
import express from "express"
import  connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import { notFound, errorHandler } from './meddleware/errorMiddleware.js'
import cors from 'cors'

const app = express()
dotenv.config()
connectDB()
app.use(cors());

app.use(express.json())

app.get('/', (req, res) => {
    res.send('app')
})


app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders',orderRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
    PORT, 
    console.log(`Backend is running in ${process.env.NODE_ENV} mode on port: ${PORT}`)
)