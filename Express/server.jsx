const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
// Une route de test simple
/* app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur Express ! , vous pouvez maintenant ajouter vos routes et fonctionnalités. Vous pouvez également connecter votre serveur à une base de données PostgreSQL en utilisant le module pg.');
});
*/

//base de donnees periodique :
let students =[
    {id: 1, name: "Lova", email: "lova@example.com"},
    {id: 2, name: "Sarobidy", email: "sarobidy@example.com"}
]

students: Array;

// Démarrage du serveur avec listen et PORT comme parametre
app.listen(PORT, () => {
  console.log(`Serveur allume sur http://localhost:${PORT}`);
});

//test avec le verbe GET pour récupérer les utilisateurs
app.get('/api/students',(req, res) =>{
    res.json(students);
})

//test avec le verbe POST pour ajouter un utilisateur
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

//syntaxe de delete (verbe http) dans notre pre-API
app.delete(('/api/students/:id') , (req , res) => {
   const idcible = req.params.id;
   if(idcible === res.params.id){
    res.params.id.delete();
   }
   res.status(204).json(idcible);
});