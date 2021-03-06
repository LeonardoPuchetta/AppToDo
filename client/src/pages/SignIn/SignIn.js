import React from 'react';
import { Layout , Tabs} from 'antd';
import {Route,Routes,Navigate} from 'react-router-dom' ;
import "./SigIn.scss";

import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';


export default function SignIn() {

const {Content} = Layout;
const {TabPane } = Tabs ; 




  return (
    <Layout className='sign-in'>
      <Content className='sign-in__content'>
        <h1>
          <img src='' alt="" / >
        </h1>

        <div className='sign-in__content-tabs'>

          <Tabs type='card'>

            <TabPane tab={<span>Entrar</span>} key="1">
            <LoginForm/>
            </TabPane>
            <TabPane tab={<span>Nuevo usuario</span>} key="2">
            <RegisterForm/>
              
            </TabPane>
          
          </Tabs>

        </div>
      </Content>
    </Layout>
  )
}
