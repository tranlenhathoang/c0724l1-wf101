import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useDispatch } from 'react-redux';
import { login } from '../redux/accountAction';
import { checkLogin } from '../ApiStudent/ApiLoin';

const Login =()=>{
    const [eyePosition, setEyePosition] = useState({x:0, y:0});
    const [isEyeClosed, setIsEyeClosed] = useState(false);
    const navigate = useNavigate();
    const dispatch= useDispatch(); // Hook để gửi action
    const handleEyeMove = (e)=>{
        const input = e.target;
        const {selectionStart}= input; 
        const lengthNow = input.value.length;
        // selectionStart là thuộc tính mặc định trả về vị trí con trỏ hiện tại
        //  lengthNow độ dài của chuỗi hiện tạ
        if(lengthNow === 0){
            setEyePosition({x:0, y:0});
        }else{
        const x = (selectionStart/(lengthNow+1))*30-15;
        const y = (selectionStart/(lengthNow+1))*10-5;
        setEyePosition({x, y});
        }

        //  x là vị trí tròng mắt dịch chuyển theo vị trí của con trỏ
    
    }
    const handleEyeFocus= ()=>{
        setIsEyeClosed(true)
    };
    const handleEyeBlur= ()=>{
        setIsEyeClosed(false)
    }
    const handleSubmit= async (value)=>{   
           // setFieldError dùng để hiển thị lỗi nếu trường mật khẩu sai nó được sử dụng giống như validate; 
            const user = await checkLogin(value);
            
            if(user){
                dispatch(login(user));
                console.log(user);
                navigate('/homepage');
            }else{
                alert('Đăng nhập thất bại')
            }
    }
    const handleValidate = Yup.object({
        email: Yup.string().required('Không Được Để Trống'),
        password: Yup.string().required('Vui Lòng Điền Mật Khẩu')
    })

    return (
        <>
        <div style={{ marginBottom: "20px", position: "relative", height: "50px" }}>
            {/* mắt trái */}
            <svg width='60' height='60' style={{position:'absolute', left:'45%'}}>
                <circle cx="30" cy="30" r="25" fill="white" stroke="black" strokeWidth="2" />
                {!isEyeClosed ? (<circle cx={30 + eyePosition.x} cy={30 + eyePosition.y} r='10' fill='black' style ={{transition: 'transform 0.2s ease'}}/>) : (<line x1='20' y1='30' x2='40' y2='30' stroke='black' strokeWidth='3'/>)}
                {/* stroke: màu của đường thẳng khi nhắm mắt */}
                {/* strokeWidth: độ dày */}
                {/* cx, cy, r: khoảng cách từ của tròng mắt và bán kính của tròng mắt */}
                {/* x1,x2: độ dài của đường line khi nhắm mắt */}
                {/* y1, y2: khoảng cách của đường line khi nhắm mắt  */}
            </svg>
            {/* mắt phải */}
            <svg width='60' height={'60'} style={{position: 'absolute', left: '55%'}}>
                <circle cx="30" cy="30" r="25" fill="white" stroke="black" strokeWidth="2" />
                {!isEyeClosed ? (<circle cx={30 + eyePosition.x} cy={30 + eyePosition.y} r='10' fill='black' style ={{ transition: 'transform 0.2s ease'}}/>): (<line x1='20' y1='30' x2='40' y2='30' stroke='black' strokeWidth='3'/>)}
            </svg>
        </div>
        <Formik initialValues={{email:'', password:''}} onSubmit={handleSubmit} validationSchema={handleValidate}>
            <Form className={"text-center"}>
                <div className={"mb-3"}>
                    <label className="col-sm-2">Email:</label>
                    <Field type='text' name='email' onInput={handleEyeMove}/>
                    <ErrorMessage name='email' style={{color: 'red'}} component='div'/>

                </div>
                <div className={"mb-3"}>
                    <label className="col-sm-2">Password:</label>
                    <Field type='password' name='password' onFocus={handleEyeFocus} onBlur={handleEyeBlur}/>
                    <ErrorMessage name='password' style={{color: 'red'}} component='div'/>
                </div>
                <div className={"mb-3"}>
                    <button className={"btn btn-sm btn-success"} type='submit'>Login</button>
                    <Link className={"btn btn-sm btn-outline-secondary"} style={{marginLeft: '10px'}} to='/register'>Register</Link>
                </div>
            </Form>
        </Formik>
        </>
    )
}
export default Login;