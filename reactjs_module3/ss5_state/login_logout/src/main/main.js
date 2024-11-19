import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { check } from "./customer";

class LoginLogout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState((pre) => ({
      ...pre,
      [name]: value,
    }));
  }
  handleSubmit() {
    const { email, password } = this.state;
    const person = { email, password };
    this.setState((pre) => ({
      ...pre,
      isLogin: check(person),
    }));
  }
  handleLogout(){
    this.setState((pre)=>({
        ...pre,
        isLogin: false,
        email: "",
        password: ""
    }));
  }
  render() {
    return (
      <>
        {this.state.isLogin ? (
          <div className={"text-center"}>
            <p>Hello</p>
            <button onClick={this.handleLogout} className="btn btn-sm btn-danger">Logout</button>
          </div>
        ) : (
          <div className={"text-center"}>
            <h1 style={{ color: "rgb(18, 110, 253)" }}>Facebook</h1>
            <form>
              <div className={"mb-3"}>
                <label className="col-sm-2">Email:</label>
                <input
                  className={" w-25"}
                  type="text"
                  name="email"
                  onChange={this.handleChange}
                />
              </div>
              <div className={"mb-3"}>
                <label class="col-sm-2">Password:</label>
                <input
                  className={"w-25"}
                  type="text"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <button
                  style={{ margin: "10px" }}
                  className={"btn btn-sm btn-primary"}
                  type="button"
                  onClick={this.handleSubmit}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        )}
      </>
    );
  }
}
export default LoginLogout;
