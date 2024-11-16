import React from "react";
import { getStudent } from "./customer";
import AddStudent from "./addStudent";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class TableStudent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            students: []
        };
        this.handleAddStudent= this.handleAddStudent.bind(this);
    }

    componentDidMount(){
        this.setState((pre)=>({
            ...pre,
            students: getStudent()
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
                                <button class={'btn btn-sm btn-success'}>Edit</button>
                                <button style={{marginLeft: '3px'}} class={'btn btn-sm btn-danger'}>Delete</button>
                            </td>
                         </tr>
                    ))}
                </tbody>
            </table>
            </>
        );
    }
}
export default TableStudent;