import express from 'express';
const PORT = process.env.PORT || 3000;
const app = express();
import cors from 'cors';
import router from './routes/student.js';
import { postNewStudent } from './controllers/student.js';
import { putStudent } from './controllers/student.js';
import { patchStudent } from './controllers/student.js';
import { deleteStudent } from './controllers/student.js';

app.use('/students' , router);
app.use(express.json());
app.use(cors());

// Démarrage du serveur avec listen et PORT comme parametre du port a lancer 
app.listen(PORT, () => {
  console.log(`Serveur allume sur http://localhost:${PORT}`);
});

app.get('/students',(req , res) =>{
    res.json();
})

app.post('/students', postNewStudent);

//test avec le verbe put : changement total dans notre api
app.put('/:id' , putStudent);

//test avec le verbe patch
app.patch('/:id' , patchStudent);


app.delete('/:id', deleteStudent);