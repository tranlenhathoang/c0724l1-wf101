import React, { useState,useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {ErrorMessage, Field, Formik, Form} from 'formik'
import { getResort } from "../../ApiResort/ApiListResort";
import { getCategory } from "../../ApiResort/ApiCategory";
import { roomUpdate } from "../../ApiResort/ApiListResort";
import * as Yup from 'yup';

const EditRoom = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [room, setRoom] = useState({
    name: "",
    acg: "",
    image: "",
    category: "",
  });
  useEffect(()=>{
    // lấy dữ liệu phòng và danh mục category
    const fetchData = async ()=>{
        const roomList = await getResort();
        const selectRoom = roomList.find((room)=> room.id === parseInt(id));
        if(selectRoom){
            setRoom({
                ...selectRoom,
                category: JSON.stringify(selectRoom.category)
                // chuyển category thành chuỗi để dùng trong select
            });
        }
        const categoryList = await getCategory();
        setCategory(categoryList);
    }
    fetchData();
  },[id]);

// update thông tin
const handleSubmit = async (value)=>{
    const updateCategory = JSON.parse(value.category);
    const updateRoom = {
        ...value,
        category: updateCategory
    }
    await roomUpdate(id, updateRoom);
    navigate('/list');
}
const handleValidate = Yup.object({
    name: Yup.string().required("Room name is required"),
    acg: Yup.string().required("Area is required"),
    image: Yup.string().required("Image is required"),
    category: Yup.string().required("Category is required"),
})
  return (
    <>
      <div className="container mt-5">
        <div className=" row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center mb-4">EDIT ROOM</h2>
            <Formik
              initialValues={room}
              onSubmit={handleSubmit}
              enableReinitialize={true}
              validationSchema={handleValidate}
            >
              <Form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Room Name:
                  </label>
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
                  <label htmlFor="acg" className="form-label">
                    Area (m<sup>2</sup>):
                  </label>
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
                  <label htmlFor="image" className="form-label">
                    Room Image:
                  </label>
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
                  <label htmlFor="category" className="form-label">
                    Category:
                  </label>
                  <Field as="select" name="category" className="form-select">
                    <option value={""}>-------Select----------</option>
                    {category.map((e) => (
                      <option key={e.id} value={JSON.stringify(e)}>
                        {/* JSON.stringify() lấy cả đối tượng */}
                        {e.name}
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
                  <button type={"submit"}>Save Change</button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditRoom;
