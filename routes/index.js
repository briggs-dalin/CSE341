const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.klaraRoute);
routes.get('/dalin', lesson1Controller.dalinRoute);
routes.get('/henry' ,lesson1Controller.henryRoute);

module.exports = routes;