const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({


    title: {
        type: String
    },
    sellingPrice: {
        type: Number,
        required: true
    },
    costPrice: {
        type: Number,
        required: true
    },
    taxRate: {
        type: String,
        enum: ['5', '10', "18"],
        default: '5',
        required: true
    },
    taxTaken: { type: Number },
    profit: {
        type: Number
    },
    assignedTo: {
        type: String

    }
});

const Task = mongoose.model('task', TaskSchema);

module.exports = { Task: Task }