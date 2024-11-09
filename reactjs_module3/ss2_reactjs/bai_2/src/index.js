import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const formSingIn =  <>
  <div className="container mt-5">
    <div className="row justify-content-center">
        <div className="text-center">
          <img src="/bootstrap.jpeg" alt="bootstrap" width={80}/>
        </div>
        <div className="col-md-4">
          <h3 className="text-center">Please sing in</h3>
        </div>
        <form className={"text-center"}>
            <div className="mb-3 d-flex justify-content-center">
              <input className="form-control form-control-lg w-25" type="text" placeHolder="Email address" aria-label=".form-control-lg example"/>
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <input className="form-control form-control-lg w-25" type="text" placeHolder="Password" aria-label="default input example"/>
            </div>
            <div>
              <label><input type="checkbox"/>Remenber me</label>
            </div>
            <button className={"btn btn-primary w-25"} type={"submit"}> Sing in</button>
        </form>
        <div className="text-center mt-3"><p>2017-2021</p></div>
    </div>
  </div>
</>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  formSingIn
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
