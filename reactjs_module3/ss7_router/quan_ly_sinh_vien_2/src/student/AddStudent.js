import React, {useRef} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { addStudent } from "./ApiStudent";
import { useNavigate } from "react-router-dom";

const AddStudent = ()=>{
    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const navigate = useNavigate();
    const handleSubmit = ()=>{
        const name = nameRef.current.value;
        const phone = phoneRef.current.value;
        const email= emailRef.current.value;
        const newStudent ={name,phone,email};
        addStudent(newStudent);
        navigate('/product');
    }
    return(
        <>
        <form>
        <div className={'text-center'}>
                <h2>Student Lish</h2>
                <form>
                    <div className={'mb-3'}>
                        <label className="col-sm-2">Name:</label>
                        <input className={' w-25'} type="text" name="name" ref={nameRef}/>
                    </div>
                    <div className={'mb-3'}>
                        <label  className="col-sm-2">Phone:</label>
                        <input className={'w-25'} type="text" name="phone" ref={phoneRef}/>
                    </div>
                    <div className={'mb-3'}>
                        <label  className="col-sm-2">Email:</label>
                        <input className={'w-25'} type="text" name="email" ref={emailRef}/>
                    </div>
                    <div>
                        <button onClick={handleSubmit} style={{margin: '10px'}} className={'btn btn-sm btn-primary'} type="button">Submit</button>
                    </div>
                </form>
            </div>
        </form>
        </>
    )
}
export default AddStudent;