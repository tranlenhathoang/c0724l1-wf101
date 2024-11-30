import React,{useRef} from "react";
import {useNavigate} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef()
    const navigate = useNavigate();

    const handleCheck = ()=>{
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (email === 'admin@gmail.com' && password === 'letmein'){
            navigate('/employee')
        } else {
            alert('Vui Lòng Nhập Đúng Mật Khẩu hoặc Email')
        }
    }
  return (
    <>
      <div className={"text-center"}>
        <h1 style={{ color: "rgb(18, 110, 253)" }}>EMPLOYEE</h1>
        <form>
          <div className={"mb-3"}>
            <label className="col-sm-2">Email:</label>
            <input
              className={" w-25"}
              type="text"
              name="email"
              ref={emailRef}
            />
          </div>
          <div className={"mb-3"}>
            <label class="col-sm-2">Password:</label>
            <input
              className={"w-25"}
              type="text"
              name="password"
              ref={passwordRef}
            />
          </div>
          <div>
            <button
              style={{ margin: "10px" }}
              className={"btn btn-sm btn-primary"}
              type="button"
              onClick={handleCheck}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
