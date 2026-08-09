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