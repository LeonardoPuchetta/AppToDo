import React from 'react';
import {Layout} from 'antd' ; 

import {Route,Switch,Navigate,Routes} from 'react-router-dom';
import SignIn from '../pages/SignIn/SignIn';

import './LayoutBasic.scss';


export default function LayoutBasic(props){


const {children} = props ; 
const {Header,Content,Footer} = Layout ; 

const user = null ; 

//para que nos devuelva al login si no hay usuario logeado 
//if (!user) {

 // return (
   // <> 
 // <Routes>
  //  <Route path='/todo' element = {SignIn}/>
 // </Routes>
 // <Navigate  to ='/login'/>
 //   </>
 // )
//}




  return (
    <Layout className='layout-basic'>
          <Header className='layout-basic__header'>Header Basic...</Header>
          <Content className='layout-basic__content'>{children}</Content>
          <Footer className='layout-basic__footer'>Footer ...</Footer>
    </Layout>
  )
}
