import express, { Request, Response } from '../Express/node_modules/express/lib/express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Bonjour avec Express et TypeScript !');
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
