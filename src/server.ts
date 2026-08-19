import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './controllers/studentRouter';


dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.status(200).json({status: 'runnig the api'});
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(` Serveur en cours d'exécution sur : http://localhost:${PORT}`);
});
