import React, { useEffect, useState } from "react";
import { deleteStudent, getStudent } from "../ApiStudent/ApiStudent";
import { Link } from "react-router-dom";
import DeleteStudent from "./DeleteStudent";

const ListStudent = () => {
  const [students, setStudent] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [studentDelete, setStudentDelete] =useState('');

  useEffect(() => {
    setStudent(() => [...getStudent()]);
  }, []);
  const handleShowModal = (student)=>{
    setIsShowModal(!isShowModal);
    setStudentDelete(student);
  }
  const handleDelete = (id)=>{
    deleteStudent(id)
    setStudent(getStudent());
    setIsShowModal(false);
  }
  return (
    <>
      <Link className={"btn btn-sm btn-success"} to={"/list/add"}>Thêm +</Link>
      <table className={"table table-bordered"}>
        <thead>
          <tr className={"text-center"}>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((e, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.name}</td>
              <td>{e.phone}</td>
              <td>{e.email}</td>
              <td>
                <button className={"btn btn-sm btn-success"}>Edit</button>
                <button
                    onClick={() => handleShowModal(e)}
                  style={{ marginLeft: "3px" }}
                  className={"btn btn-sm btn-danger"}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isShowModal && <DeleteStudent onClose={handleShowModal} studentDelete={studentDelete} onDelete={handleDelete}/>}
      <Link
        style={{ marginLeft: "10px" }}
        className={"btn btn-sm btn-primary"}
        to="/homepage"
      >
        Back
      </Link>
    </>
  );
};
export default ListStudent;
