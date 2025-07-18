const { Router } = require('express');
const { createTask } = require('../controllers/task.controller');

const taskRouter = new Router();

taskRouter.post('/create', createTask);

module.exports = taskRouter;