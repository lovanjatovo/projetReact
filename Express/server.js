const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
// Une route de test simple
/* app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur Express ! , vous pouvez maintenant ajouter vos routes et fonctionnalités. Vous pouvez également connecter votre serveur à une base de données PostgreSQL en utilisant le module pg.');
});
*/
let students =[
    {id: 1, name: "Lova", email: "lova@example.com"},
    {id: 2, name: "Sarobidy", email: "sarobidy@example.com"}
]

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
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
        id: studentChange.req,
        name: studentChange.req,
        email: studentChange.req
    };
    students.push(studentChange);
    res.status(200).json(studentChange);
});

//test avec le verbe patch
app.patch('/api/students/:id') , (req , res) => {

};
/*
const express = require('express');
const app = express(); // app est une constante qui va se faire attribuer les fonctions de express 

const PORT = process.env.PORT || 3000;

// 1. MIDDLEWARES (À placer en premier)
app.use(express.json());

// Servir des fichiers statiques
app.use(express.static('public'));

// Middleware personnalisé de logging
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] Nouvelle requête sur ${req.url}`);
    next();
});

// 2. ROUTES + verbes HTTP (À placer après les middlewares)

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

// Exemple de réponse JSON
app.get('/api/user-profile', (req, res) => {
    res.json({ name: 'Alice', role: 'admin' });
});

// Paramètres de requête (ex: /search?theme=dark)
app.get('/search', (req, res) => {
    const theme = req.query.theme;
    res.send(`Thème recherché : ${theme}`);
});

// Paramètres de route dynamique (ex: /users/42)
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`ID de l'utilisateur : ${userId}`);
});

// Routes API CRUD
app.post('/api/users', (req, res) => {
    res.status(201).send('Utilisateur créé');
});

app.put('/api/users', (req, res) => {
    res.send('Utilisateur modifié');
});

app.delete('/api/users', (req, res) => {
    res.send('Utilisateur supprimé');
});

// Exemple de redirection
app.get('/ancienne-page', (req, res) => {
    res.redirect('/nouvelle-page');
});

// Gestion des pages non trouvées (404) - À placer après toutes les autres routes
app.use((req, res) => {
    res.status(404).send('Page introuvable');
});


// 3. DÉMARRAGE DU SERVEUR (Tout à la fin)
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

*/