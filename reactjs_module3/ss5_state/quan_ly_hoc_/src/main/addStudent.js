import React from "react";


class AddStudent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: "",
        };
        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }
    handleChange(event){
        const { name, value }= event.target;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(){
        const { name, phone, email } = this.state;
        const newStudent = {name, phone, email};
        this.props.onAddStudent(newStudent);
    }
    render(){
        return(
            <>
            <div class={'text-center'}>
                <h2>Student Lish</h2>
                <form>
                    <div class={'mb-3'}>
                        <label class="col-sm-2">Name:</label>
                        <input class={' w-25'} type="text" name="name" onChange={this.handleChange}/>
                    </div>
                    <div class={'mb-3'}>
                        <label  class="col-sm-2">Phone:</label>
                        <input class={'w-25'} type="text" name="phone" onChange={this.handleChange}/>
                    </div>
                    <di class={'mb-3'}>
                        <label  class="col-sm-2">Email:</label>
                        <input class={'w-25'} type="text" name="email" onChange={this.handleChange}/>
                    </di>
                    <div>
                        <button style={{margin: '10px'}} class={'btn btn-sm btn-primary'} type="button" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
            </>
        );
    }
}
export default AddStudent;