// Layouts 
import LayoutBasic from "../layouts/LayoutBasic";
import LayoutSign from "../layouts/LayoutSign";

//Pages

import ToDo from '../pages/ToDo';
import SignIn from "../pages/SignIn";
import Error404 from "../pages/Error404";
import PruebaForm from "../pages/PruebaForm";

//arreglo de rutas 
    const routesToDo  =[
        {
            path :'/prueba',
            layout: LayoutBasic,
            component : PruebaForm,
            
            },
                    {
                    path :'/todo',
                    layout: LayoutBasic,
                    component : ToDo,
                    
                    },
                    {
                    path : '*',
                    layout : LayoutBasic,
                    component: Error404
                    }
                    ];
    const routesSign = [
                    {
                    path : '/login',
                    layout: LayoutSign,
                    component :SignIn ,   
                    },
                  
                    ];
    const routes = [...routesToDo , ...routesSign] ; 
     
    export default routes ; 



