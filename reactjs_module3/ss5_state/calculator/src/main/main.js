import React from "react";

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            numberOne: "",
            numberTwo: "",
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleCong= this.handleCong.bind(this);
        this.handleTru= this.handleTru.bind(this);

    }
    handleChange(event){
        const {name, value} = event.target;
        this.setState(()=>({
            [name]: value
        }));
    }
    handleCong(){
        const {numberOne, numberTwo}= this.state;
        console.log(numberOne);
        console.log(numberTwo);
        this.setState((pre)=> {
           const result = parseInt(numberOne) + parseInt(numberTwo);
           return {result};
        });
    }
    handleTru(){
        const {numberOne, numberTwo}= this.state;
        this.setState((pre)=> {
           const result = parseInt(numberOne) - parseInt(numberTwo);
           return {result};
        });
    }
    render(){
        return(
            <>
            <div>
                <div>
                    <input type="text" name="numberOne" onChange={this.handleChange}/>
                </div>
                <div>
                    <input type="text" name="numberTwo" onChange={this.handleChange}/>
                </div>
                <p>Result:{this.state.result}</p>
                <button onClick={this.handleCong}>+</button>
                <button onClick={this.handleTru}>-</button>
                <button>x</button>
                <button>/</button>
            </div>
            </>
        );
    }
}
export default Calculator;