import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getCategory } from "../../ApiResort/ApiCategory";
import { addNewResort } from "../../ApiResort/ApiListResort";

const AddNewRoom = () => {
  const [categoryList, setCategory] = useState([]);
  const navigate = useNavigate();
  const [room, setRoom] = useState({
    name: "",
    acg: "",
    image: "",
    category: "",
  });
  useEffect(() => {
    const fetchCategory = async () => {
      const list = await getCategory();
      setCategory(list);
    };
    fetchCategory();
  });
  const handleSubmit = async (value) => {
    const newResort = { ...value };
    await addNewResort(newResort);
    navigate("/list");
  };
  const handleValidate = Yup.object({
    name: Yup.string().required("Room name is required"),
    acg: Yup.string().required("Area is required"),
    image: Yup.string().required("Image is required"),
    category: Yup.string().required("Category is required"),
  });
  return (
    <>
      <div className="container mt-5">
        <div className=" row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center mb-4">ADD NEW ROOM</h2>
            <Formik
              initialValues={room}
              onSubmit={handleSubmit}
              validationSchema={handleValidate}
            >
              <Form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Room Name:</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter room name"
                  />
                  <ErrorMessage
                    name="name"
                    component={"div"}
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="acg" className="form-label">Area (m<sup>2</sup>):</label>
                  <Field
                    type="text"
                    id="acg"
                    name="acg"
                    className="form-control"
                    placeholder="Enter room Area"
                  />
                  <ErrorMessage
                    name="acg"
                    component={"div"}
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">Room Image:</label>
                  <Field
                    type="text"
                    id="image"
                    name="image"
                    className="form-control"
                    placeholder="Enter room IMAGE"
                  />
                  <ErrorMessage
                    name="image"
                    component={"div"}
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">Category:</label>
                  <Field as="select" name="category" className="form-select">
                    <option value={""}>-------Select----------</option>
                    {categoryList.map((e) => (
                      <option key={e.id} value={e.category}>
                        {e.category}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="category"
                    component={"div"}
                    className="text-danger"
                  />
                </div>
                <div>
                  <button type={"submit"}>Save</button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddNewRoom;
