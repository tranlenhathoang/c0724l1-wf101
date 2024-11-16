import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class AddWork extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            work:''
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        const {name, value} = event.target;
        this.setState(()=>({
            [name] : value
        }));
    }
    handleSubmit(){
        const {work}=this.state;
        const newWork = {work};
        console.log(newWork);
        this.props.submitWork(newWork);
    }
    render (){
        return(
            <>
            <div class={'text-center'}>
                <h3>Todo List</h3>
                <form>
                    <input type='text' name='work' onChange={this.handleChange}></input>
                    <button type='button' onClick={this.handleSubmit}>ADD</button>
                </form>
            </div>
            </>
        )
    }
}
export default AddWork;