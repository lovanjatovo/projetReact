import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import studentRouter from './student.router'; 

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use(cors());


app.use('/students', studentRouter);


app.listen(PORT, () => {
  console.log(` server launchig on http://localhost:${PORT}`);
});

export default app;