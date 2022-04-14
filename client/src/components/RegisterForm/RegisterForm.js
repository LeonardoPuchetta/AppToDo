import React ,{useState} from 'react';
import './RegisterForm.scss';

import {Form,Checkbox,Input,Button,notification} from 'antd';
import {MailOutlined,UserOutlined,LockOutlined} from '@ant-design/icons';

import {emailValidation,minLengthValidation,nameValidation} from './../../utils/formValidation';

export default function RegisterForm() {

const {Item} = Form;

//estado para guardar entradas 
const [inputs,setInputs] = useState({

  email:"",
  name: "",
  lastname:"",
  password:"",
  repeatPassword:"",
  privacyPolicy: false

})
//estado para registrar las entradas validas 
const [formValid,setFormValid]= useState({

  email: false,
  name: false,
  lastname:false,
  password:false,
  repeatPassword:false,
  privacyPolicy: false


})



//funcion para capturar eventos de cambios en el Form 
const changeForm = event => {

  //tenemos un solo checkbox 
  if (event.target.name === 'privacyPolicy'){
      setInputs({
        ...inputs ,
        [event.target.name] : event.target.checked
      })
  } else {
    //los demas inputs tienen igau name que los campos del state a completar 
    setInputs({
      ...inputs,
      [event.target.name] : event.target.value
    })
  }
 

}

//funcion para validar datos ingresados 
const inputValidation = event => {


  // del target del event queremos sacar varios atributos 
  const {type,name} = event.target ; 

  if (type === 'email') {
      setFormValid({...formValid,[name]: emailValidation(event.target)})

  };

  if (type === 'text'){
    setFormValid({...formValid,[name] : nameValidation(event.target)})

  };

  if (type==='password'){ 
  setFormValid({...formValid,[name]: minLengthValidation(event.target, 6)})

  }

  if (type ==='checkbox'){
    setFormValid({...formValid,[name]:event.target.checked})

  }






  
}

//funcion de registro con vdatos ya validados 
const register = (event) => {
  event.preventDefault();
  console.log(inputs);
  console.log(formValid)
}

  return (
    <Form className='register-form' onChange={changeForm} onSubmit={register}>
      <Item>
        <Input className='register-form__input'
                placeholder='Correo electronico'
                name='email'
                type='email'
                prefix={<MailOutlined />}
                value={inputs.email}
                onChange={inputValidation}/>
      </Item>
      <Item>
        <Input className='register-form__input'
                placeholder='Nombre'
                name='name'
                type='text'
                prefix={<UserOutlined />}
                value={inputs.name}
                onChange={inputValidation}
                />
      </Item>
      <Item>
        <Input className='register-form__input'
                placeholder='Apellido'
                name='lastname'
                type='text'
                prefix={<UserOutlined />}
                value={inputs.lastname}
                onChange={inputValidation}
                />
      </Item>
      <Item>         
        <Input className='register-form__input'
                placeholder='Contraseña'
                name='password'
                type='password'
                prefix={<LockOutlined />}
                value={inputs.password}
                onChange={inputValidation}
                />
      </Item>
      <Item>
          <Input className='register-form__input'
                placeholder='Repite tu Contraseña'
                name='repeatPassword'
                type='password'
                prefix={<LockOutlined />}
                value={inputs.repeatPassword}
                onChange={inputValidation}
                />     
      </Item>  
      <Item>
        <Checkbox name='privacyPolicy' checked={inputs.privacyPolicy} onChange={inputValidation}>
            He leido y acepto la politica de privacidad
        </Checkbox>
      </Item>
      <Item>
        <Button htmlType='submit' className='register-form__button' onClick={register}>Registrarse</Button>
      </Item>
    </Form>
  )
}
