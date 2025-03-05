const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.klaraRoute);
routes.get('/dalin', lesson1Controller.dalinRoute);

module.exports = routes;