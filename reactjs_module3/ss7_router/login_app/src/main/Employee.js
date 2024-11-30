import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { getEmployee } from "./EmployeeList";
import { Link } from "react-router-dom";

const Employee = () => {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    setEmployee(() => [...getEmployee()]);
  }, []);
  return (
    <>
    <h1 className={"text-center"}>DANH SÁCH ĐỐI TƯỢNG</h1>
    <Link style={{marginLeft: '10px', color:"rgb(18, 110, 253)"}} className="nav-link active" to='/'>LogOut</Link>
      <table className={"table table-bordered"}>
        <thead>
          <tr className={"text-center"}>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((e, i) => (
            <tr key={i}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>
                <Link className={"btn btn-sm btn-success"} to ={'/employee/detail/'+e.id}>Detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Employee;
