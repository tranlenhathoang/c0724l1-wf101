import React, {useState, useEffect } from "react";
import { deleteStudent, getStudent } from "./ApiStudent";
import { Link } from "react-router-dom";
import DeleteStudent from "./DeleteStudent";


const ListStudent = ()=>{
    const [studentList, setStudentList] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false);
    const [studentDelete, setDeleteStudent] = useState('');

    useEffect(()=>{
        setStudentList(()=>(
            [
                ...getStudent()
            ]
        ))
    },[]);
    const handleShowModal = (student)=>{
        setIsShowModal(!isShowModal);
        setDeleteStudent(student)
    }
    const handleDeleteStudent = (id)=>{
       deleteStudent(id);
       setStudentList(getStudent());
       setIsShowModal(false);
    }
    return (
        <>
        <Link to='/product/add'>ADD STUDENT</Link>
        <table className={'table table-bordered'}>
                <thead>
                    <tr className={'text-center'}>
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
                                <button onClick={()=>handleShowModal(e)} style={{marginLeft: '3px'}} className={'btn btn-sm btn-danger'}>Delete</button>
                            </td>
                         </tr>
                    ))}
                </tbody>
            </table>
        {isShowModal&&<DeleteStudent onClose={handleShowModal} student={studentDelete} onDelete={handleDeleteStudent}/>}
        </>
    )
}
export default ListStudent;