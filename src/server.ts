import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import studentRouter from './controllers/studentRouter';


dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.send('runnig the api');
});


app.use('/students', studentRouter);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(` Serveur en cours d'exécution sur : http://localhost:${PORT}`);
});