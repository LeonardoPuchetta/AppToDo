const express = require('express'); 

//creacion de la aplicacion 
const app = express() ; 
app.use(express.json());


const {API_VERSION , IP_SERVER, PORT_DB} = require('./config'); 

//cargando rutas 
const userRoutes = require('./routes/user') ; 

const taskRoutes = require('./routes/task');



//rutas basicas 
app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, taskRoutes);



module.exports = app ; 
