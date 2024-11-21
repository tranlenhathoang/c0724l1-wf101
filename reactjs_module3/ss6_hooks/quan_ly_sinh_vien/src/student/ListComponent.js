import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { addStudentList, getStudent, deleteStudent, searchStudent } from './Student';
import AddStudent from './AddStudent';
import DeleteStudent from './DeleteStudent';
import SearchStudent from './Search';

const ListComponent = ()=>{
    const [studentList, setStudentList] = useState([])
    const [isShowModal, setIsShowModal] = useState(false)
    const [Student, setDeleteStudent] = useState(null)
    useEffect(()=>{
        setStudentList(()=>(
            [
                ...getStudent()
            ]
        ))
    },[]); 
    const handleAddStudent =(newStudent)=>{
        addStudentList(newStudent);
        setStudentList([...getStudent()]);
    }
    const handleShowModal = (student)=>{
        setIsShowModal((pre)=> !pre);
        setDeleteStudent(student);
    }
    const handleDeleteStudent = (student)=>{
        console.log('------delete---')
        deleteStudent(student)
        setStudentList([...getStudent()]);
        setIsShowModal(false);
    }
    const handleSearchStudent = (studentId)=>{
        console.log('----search----')
        const result = searchStudent(studentId)
        setStudentList([...result]);
    }
    const handleReset =()=>{
        setStudentList([...getStudent()]);
    }
    return (
        <>
        <AddStudent onAddStudent={handleAddStudent}/>
        <SearchStudent onReset={handleReset} onSearch={handleSearchStudent}/>
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
                                <button onClick={()=>handleShowModal(e)} style={{marginLeft: '3px'}} className={'btn btn-sm btn-danger'}>Delete</button>
                            </td>
                         </tr>
                    ))}
                </tbody>
            </table>
            {
                isShowModal ? <DeleteStudent onDelete={handleDeleteStudent} student={Student} onShowModal={handleShowModal}/>:""
            }
        </>
    )
}
export default ListComponent;