const express = require('express');

const TaskController = require('./../controllers/task');

const api = express.Router();

api.post('/new-task', TaskController.newTask) ; 
api.get('/get-tasks',TaskController.getTasks);



module.exports = api ; 

