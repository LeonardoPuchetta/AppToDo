//para encriptar contrasenas 
const bcrypt = require('bcrypt');

//traemos el modelo 
const User = require('./../models/user');


//funcion para crear nuevo usuario 
function signUp(request,response){

    const user = new User();

    const  {name,lastname,email,password,repeatPassword}  = request.body ; 

    user.name = name ; 
    user.lastname = lastname;
    user.email = email;
    user.active = true ;
    user.status = "User";

    //manejo de contrasenas 
    if (!password ||!repeatPassword) {
        response.status(404).send({
            message: "Las contraseñas son obligatorias"
        })
    } else {
        if (password !== repeatPassword){
            response.status(404).send({
                message: "Las contraseñas deben ser iguales"

            })
        } else {

            //encriptacion de contraseñas 
            bcrypt.hash(password,8, function (error,hash){
                        if(error) {
                            response.status(500).send({
                            message: "Ha ocurrido un error al encriptar la contraseña"
                            }) 
                        } else {
                            user.password=hash ; 

                            //validando y guardando datos en la BD !!!!

                            user.save((error,userStored) => {

                                if (error) {
                                    response.status(500).send({
                                        message:"Error en el servidor"
                                    })
                                } else {
                                    //validacion
                                    if(!userStored){
                                        response.status(404).send({message:"Error al crear el usuario"})
                                    } else {
                                        response.status(200).send({user:userStored})
                                    }


                                }
                            })


                           }
                        });

        }
    }
}




module.exports = {
    signUp
}



