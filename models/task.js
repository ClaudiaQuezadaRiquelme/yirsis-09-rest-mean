const { Schema } = require("mongoose");

const task = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        trim: true,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});

module.exports = model('Task', task);