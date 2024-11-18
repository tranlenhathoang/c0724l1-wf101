import React from "react";
import { getStudent } from "./customer";
import AddStudent from "./addStudent";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import DeleteStudent from "./deleteStudent";
import { deleteStudent } from "./customer";

class TableStudent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            students: [],
            isShowModal: false,
            selectStudent: null
        };
        this.handleAddStudent= this.handleAddStudent.bind(this);
        this.handleShowModal= this.handleShowModal.bind(this);
        this.handleDelete= this.handleDelete.bind(this);

    }
    componentDidMount(){
        this.setState((pre)=>({
            ...pre,
            students: getStudent()
        }));
    }
    handleShowModal(student){
        this.setState((pre)=>({
            ...pre,
            isShowModal: !pre.isShowModal,
            selectStudent: student
        }));
        
    }
    handleDelete(inputStudent){
        this.setState((pre)=>({
            ...pre,
            students: deleteStudent(inputStudent),
            isShowModal: false,
            selectStudent: null
        }));
    }
    handleAddStudent(newStudent){
        this.setState((pre)=>({
            students: [...pre.students, newStudent]
        }));
    }

    render(){
        return(
            <>
            <AddStudent onAddStudent={this.handleAddStudent}/>
            <table class={'table table-bordered'}>
                <thead>
                    <tr class={'text-center'}>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.students.map((e,i) =>(
                         <tr key={i}>
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
            <DeleteStudent deleteStudent={this.handleDelete} isShowModal={this.state.isShowModal} onClose ={this.handleShowModal} student={this.state.selectStudent}/>
            </>
        );
    }
}
export default TableStudent;