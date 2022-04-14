const mongoose = require('mongoose'); 

const Schema = mongoose.Schema ; 

const UserSchema = Schema (
    {
        name : String,
        lastname: String,
        email: {
            type : String , 
            unique : true
        },
        password:String,
        active :Boolean,
        status:String

    }
)

//estamos agregando un id al objeto a recuperar 
//cambiando la funcionalidad toJSON 
UserSchema.set('toJSON' , {
    transform : (document,returnedObject) => {
        returnedObject.id = returnedObject._id
    }
})



module.exports = mongoose.model("User" , UserSchema) ;