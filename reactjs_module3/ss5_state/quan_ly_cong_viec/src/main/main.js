import React from "react";
import AddWork from "./add";

class TableWork extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            works :[]
        };
        this.handleAddWork=this.handleAddWork.bind(this);
    }
    handleAddWork(newWork){
        console.log('new',newWork);
        this.setState((pre)=>({
            works : [...pre.works, newWork]
        }));
    }
    render(){
        return(
            <>
            <AddWork submitWork ={this.handleAddWork}/>
            <table class={'table'}>
                <thead>
                    <tr class={'text-center'}>
                        <th>Công Việc Cần Làm Trong Ngày</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.works.map((e,i)=>(
                        <tr key={i}>
                            <td>{e.work}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </>
        );
    }
}
export default TableWork;