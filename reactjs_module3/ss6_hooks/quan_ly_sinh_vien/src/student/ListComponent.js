import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { addStudentList, getStudent } from './Student';
import AddStudent from './AddStudent';

const ListComponent = ()=>{
    const [studentList, setStudentList] = useState([])
    useEffect(()=>{
        setStudentList(()=>(
            [
                ...getStudent()
            ]
        ))
    },[]); 
    const handleAddStudent =(newStudent)=>{
        setStudentList(addStudentList(newStudent));
    }
    return (
        <>
        <AddStudent onAddStudent={handleAddStudent}/>
        <table class={'table table-bordered'}>
                <thead>
                    <tr class={'text-center'}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map((e,i) =>(
                         <tr key={i}>
                            <td>{i+1}</td>
                            <td>{e.name}</td>
                            <td>{e.phone}</td>
                            <td>{e.email}</td>
                            <td>
                                <button className={'btn btn-sm btn-success'}>Edit</button>
                                <button onClick={()=>this.handleShowModal(e)} style={{marginLeft: '3px'}} className={'btn btn-sm btn-danger'}>Delete</button>
                            </td>
                         </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default ListComponent;