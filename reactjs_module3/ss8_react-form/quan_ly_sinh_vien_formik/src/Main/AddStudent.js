import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addStudent } from "../ApiStudent/ApiStudent";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const AddStudent = () => {
    const navigate = useNavigate();
  const handleSubmit = async (value) => {
    const student = {
      ...value,
      // manufacture: JSON.parse(value.manufacture)
    };
    await addStudent(student);
    toast.success('Thêm mới thành công');
    navigate('/list');
  };
  const handleValidate = Yup.object({
    name: Yup.string().required('Không được để trống'),
    phone: Yup.string().required('Không được để trống'),
    email: Yup.string().required('Không được để trống'),
    gender: Yup.string().required('Không được để trống'),
    course: Yup.array().min(1,'Vui lòng chọn ít nhất 1 môn học'),
    city: Yup.string().required('Không được để trống'),

  });
  return (
    <>
      <Formik
        initialValues={{ name: "", phone: "", email: "", gender:"", course: [], city:"" }}
        onSubmit={handleSubmit}
        validationSchema={handleValidate}
      >
        <Form className={"text-center"}>
          {/* <div className={"mb-3"}>
            <label className="col-sm-2">ID:</label>
            <Field type="text" name="id" />
            <ErrorMessage
              name="id"
              style={{ color: "red" }}
              component="div"
            />
          </div> */}
          <div className={"mb-3"}>
            <label className="col-sm-2">Name:</label>
            <Field type="text" name="name" />
            <ErrorMessage
              name="name"
              className={"text-danger"}
              component="div"
            />
          </div>
          <div className={"mb-3"}>
            <label className="col-sm-2">Phone:</label>
            <Field type="text" name="phone" />
            <ErrorMessage
              name="phone"
              className={"text-danger"}
              component="div"
            />
          </div>
          <div className={"mb-3"}>
            <label className="col-sm-2">Email:</label>
            <Field type="text" name="email" />
            <ErrorMessage
              name="email"
              className={"text-danger"}
              component="div"
            />
          </div>
          {/* radio gender */}
          <div className={"mb-3"}>
            <label className="col-sm-2">Giới tính:</label>
            <Field type="radio" name="gender" value='Male' />Male
            <Field type="radio" name="gender" value='Female' />Female
            <ErrorMessage
              name="gender"
              className={"text-danger"}
              component="div"
            />
          </div>
          {/* checkbox Course */}
          <div className={"mb-3"}>
            <label className="col-sm-2">Môn học:</label>
            <Field type="checkbox" name="course" value='Toán' />Toán
            <Field type="checkbox" name="course" value='Lý' />Lý
            <Field type="checkbox" name="course" value='Hoá' />Hoá
            <ErrorMessage
              name="course"
              className={"text-danger"}
              component="div"
            />
          </div>
          {/* select City */}
          <div className={"mb-3"}>
            <label className="col-sm-2">Thành Phố:</label>
            <Field as="select" name="city">
                <option value="">----Chọn Thành Phố----</option>
                <option value="HaNoi">HaNoi</option>
                <option value="HoChiMinh">HoChiMinh</option>
                <option value="DaNang">DaNang</option>
                <option value="Hue">Hue</option>
                <option value="CanTho">CanTho</option>
            </Field>
            <ErrorMessage
              name="city"
              className={"text-danger"}
              component="div"
            />
          </div>
          <div className={"mb-3"}>
            <button className={"btn btn-sm btn-primary"} type="submit">
              Submit
            </button>
            <Link style={{marginLeft: '10px'}} className={"btn btn-sm btn-primary"} to="/list">
              Back
            </Link>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default AddStudent;
