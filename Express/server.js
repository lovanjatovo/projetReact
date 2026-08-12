import express from 'express';
const PORT = process.env.PORT || 3000;
const app = express();
import cors from 'cors';
import router from './routes/student.js';

app.use('/' , router);
app.use(express.json());
app.use(cors());

// Démarrage du serveur avec listen et PORT comme parametre du port a lancer 
app.listen(PORT, () => {
  console.log(`Serveur allume sur http://localhost:${PORT}`);
});

app.get('/api/students',(req, res) =>{
    res.json(students);
})


app.post('/api/students', (req,res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

//test avec le verbe put : changement total dans notre api
app.put('/api/students/:id' , (req , res) => {
    const studentChange = {
        id: req.id,
        name: req.name,
        email: req.email
    };
    students.push(studentChange);
    res.status(200).json(studentChange);
});

//test avec le verbe patch
app.patch(('/api/students/:id') , (req , res) => {
    const newStudent = {
        id: req.id,
        name: req.name,
        email: req.email
    };
    students.push(newStudent);
    for(i = 0 ; i < students.length ; i++){
        if(i.name || i.id || i.email === newStudent.name || newStudent.id || newStudent.email){
            res.status(200).json(newStudent);
        }
    }
});


app.delete(('/api/students/:id') , (req , res) => {
   const idcible = req.params.id;
   if(idcible === res.params.id){
    res.params.id.delete();
   }
   res.status(204).json(idcible);
});