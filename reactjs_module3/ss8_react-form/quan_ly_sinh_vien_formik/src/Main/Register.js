import { Field, Formik, ErrorMessage, Form } from "formik";
import React from "react";
import {useNavigate } from "react-router-dom";
import { addRegister } from "../ApiStudent/ApiLoin";
import * as Yup from "yup";

const RegisterStudent = () => {
  const navigate = useNavigate();
  const handleSubmit = async (value) => {
    const account = {
      ...value,
      password: Number(value.password)
    };
    await addRegister(account);
    navigate("/");
  };
  const handleValidate = Yup.object({
    email: Yup.string().required("Không được bỏ trống"),
    password: Yup.string().required("không được bỏ trống"),
  });
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={handleValidate}
      >
        <Form className={"text-center"}>
          <div className={"mb-3"}>
            <label className="col-sm-2">Email:</label>
            <Field type="text" name="email" />
            <ErrorMessage
              name="email"
              className={"text-danger"}
              component="div"
            />
          </div>
          <div className={"mb-3"}>
            <label className="col-sm-2">Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              className={"text-danger"}
              component="div"
            />
          </div>
          <div className={"mb-3"}>
            <button type={'submit'} className="btn btn-sm btn-primary">Register</button>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default RegisterStudent;
