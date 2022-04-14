const mongoose = require ('mongoose');

const Schema = mongoose.Schema; 

//const Task = require('./task');

const TaskArraySchema = Schema({

    userId : {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    } , 
    listTask : {
        type : Array,
        default: []


        }
}
)

module.exports = mongoose.model("TaskArray",TaskArraySchema);