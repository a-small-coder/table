import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import FormikControl from '../BaseComponents/FormikControl';
import ButtonsBlock from '../../SupportsComponents/ButtonsBlock';
function LoginForm(props){
    const checkBoxOptions = [
        {key: 'Запомнить меня', value: 'rememberMe', chebox_value: false,},
    ]

    const initialValues = {
        username: '',
        password: '',
        // rememberMe: getInitValuesFromCheckboxData(checkBoxOptions),
    }

    const validation = Yup.object({
        username: Yup.string().required('Поле "Логин" обязательно для заполнения.'),
        password: Yup.string().required('Поле "Пароль" обязательно для заполнения.')
    })

    const onSubmit = (values, helpers) =>{
        // values.rememberMe = values.rememberMe.length > 0
        props.handlerSubmit(values, helpers.setFieldError, 'password')
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit}>
            {
                ({ values, errors, touched, isValid, handleBlur, handleChange}) => {
                    
                    return (
                        <Form className="authForm loginForm" autoComplete="off" >
                            <div className="authForm__form">
                                <FormikControl 
                                    control='input' 
                                    type="text" 
                                    label='Логин' 
                                    name='username'
                                    fieldClassName="auth_input"
                                    placeholder="Логин"
                                    standartOnBlur={handleBlur}
                                    isError={errors.username && touched.username}
                                />
                                <FormikControl 
                                    control='input' 
                                    type="password" 
                                    label='Пароль' 
                                    name='password' 
                                    fieldClassName="auth_input"
                                    placeholder="Пароль"
                                    standartOnBlur={handleBlur}
                                    isError={errors.password && touched.password}
                                />
                                
                                <Link 
                                    to="/restore-password" 
                                    className="authForm__password-link  _text-link _icon-search"
                                >
                                    <span>Забыли пароль?</span>
                                </Link>
                            </div>
                            <ButtonsBlock 
                                isFormValid={isValid} 
                                wrapperClass={"authForm__button-block"} 
                                formType={"login"}
                                buttonSwitchHandler={props.buttonSwitchHandler}
                            />
                        </Form>
                    )
                }
            }
        </Formik>
    )

}

export default LoginForm