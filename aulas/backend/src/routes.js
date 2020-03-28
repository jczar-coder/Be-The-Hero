const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


//Sessão de login
routes.post('/sessions', SessionController.create);
//Rota para criação de ongs
routes.post('/ongs', OngController.create);
//Rota para listagem de ongs
routes.get('/ongs', OngController.index);
//Rota para criação de casos
routes.post('/incidents', IncidentController.create);
//Rota para listagem de casos
routes.get('/incidents', IncidentController.index);
//Rota para deletar um caso
routes.delete('/incidents/:id', IncidentController.delete);

//Rota para listagem de uma ONG especifica
routes.get('/profile', ProfileController.index);



module.exports = routes;