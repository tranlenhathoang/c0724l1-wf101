import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Login =()=>{
    const navigate = useNavigate();
    const handleSubmit=(value, {setFieldError})=>{
        const correctPassword = '123456';
        const correctEmail = 'tranhoang30071998@gmail.com';
        if(value.email !== correctEmail || value.password !== correctPassword){
           setFieldError('password', 'Mật khẩu không đúng');
           // setFieldError dùng để hiển thị lỗi nếu trường mật khẩu sai nó được sử dụng giống như validate; 
        }else {
            navigate('/homepage');
        }
    }
    const handleValidate = Yup.object({
        email: Yup.string().required('Không Được Để Trống'),
        password: Yup.string().required('Vui Lòng Điền Mật Khẩu')
    })

    return (
        <>
        <Formik initialValues={{email:'', password:''}} onSubmit={handleSubmit} validationSchema={handleValidate}>
            <Form className={"text-center"}>
                <div className={"mb-3"}>
                    <label className="col-sm-2">Email:</label>
                    <Field type='text' name='email'/>
                    <ErrorMessage name='email' style={{color: 'red'}} component='div'/>
                </div>
                <div className={"mb-3"}>
                    <label className="col-sm-2">Password:</label>
                    <Field type='password' name='password'/>
                    <ErrorMessage name='password' style={{color: 'red'}} component='div'/>
                </div>
                <div className={"mb-3"}>
                    <button className={"btn btn-sm btn-primary"} type='submit'>Submit</button>
                </div>
            </Form>
        </Formik>
        </>
    )
}
export default Login;