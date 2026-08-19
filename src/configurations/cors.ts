import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const source = process.env.CORS_SOURCE || 'http://localhost:3000';
export default cors({
    origin: source,
    methods: ['GET','POST','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type','Authorization'],
});
