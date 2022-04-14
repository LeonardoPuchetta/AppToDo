const mongoose = require ('mongoose');

const Schema = mongoose.Schema; 

const TaskSchema = Schema({

    title : String,
    description: String,
    date: {
        type : Date,
        default : Date.now
    } , 
    status : String

})

//estamos agregando un id al objeto a recuperar 
//cambiando la funcionalidad toJSON 
TaskSchema.set('toJSON' , {
    transform : (document,returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v

    }
})

module.exports =  mongoose.model("Task",TaskSchema);