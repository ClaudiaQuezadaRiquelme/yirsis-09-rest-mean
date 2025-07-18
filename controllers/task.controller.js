const Task = require("../models/task");

const createTask = async (req, res) => {
    const { nombre } = req.body;
    const newTask = new Task({ nombre });

    await newTask.save();

    res.status(200).json({
        ok: true,
        msg: 'Tarea creada.'
    });
}


module.exports = {
    createTask
}