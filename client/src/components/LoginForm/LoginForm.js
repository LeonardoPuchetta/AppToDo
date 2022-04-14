import React from 'react';
import './LoginForm.scss';
import {Form,Icon,Checkbox,Input,Button,notification} from 'antd';
import {MailOutlined,UserOutlined,UnlockOutlined } from '@ant-design/icons';

export default function LoginForm() {

  const {Item} = Form;

  return (


    <Form className='login-form'>
        <Item>
          <Input className='login-form__input'
            placeholder='Ingrese su correo'
            type='email'
            name='email'
            prefix={<MailOutlined />}/>
        </Item>
        <Item>
          <Input className='login-form__input'
            placeholder='Ingrese su contraseña'
            type='password'
            name='password'
            prefix={<UnlockOutlined />}/>
        </Item>
        <Item>
          <Button className='login-form__button' type='submit'>Ingresar</Button>
        </Item>


    </Form>
  )

}
