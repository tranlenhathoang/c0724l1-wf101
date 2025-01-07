import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import {getProductById, productUpdate } from "../apiMain/ApiListProduct";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
  });
  useEffect(() => {
    // lấy dữ liệu product
    const fetchData = async () => {
      const selectProduct = await getProductById(id);
      if (selectProduct) {
        setProduct({
          ...selectProduct,
        });
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (value) => {
    const updateProduct = {
      ...value,
    };
    await productUpdate(id, updateProduct);
    navigate("/list");
  };
  const handleValidate = Yup.object({
    title: Yup.string().required("Title name is required"),
    price: Yup.string().required("Price is required"),
    description: Yup.string().required("Description is required"),
})
  return (
    <>
      <div className="container mt-5">
        <div className=" row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center mb-4">Thêm Sản Phẩm</h2>
            <Formik
              initialValues={product}
              onSubmit={handleSubmit}
              enableReinitialize={true}
              validationSchema={handleValidate}
            >
              <Form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Tên Sản Phẩm:
                  </label>
                  <Field
                    type="text"
                    id="title"
                    name="title"
                    className="form-control"
                    placeholder="Enter product name"
                  />
                  <ErrorMessage
                    name="title"
                    component={"div"}
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Giá:
                  </label>
                  <Field
                    type="text"
                    id="price"
                    name="price"
                    className="form-control"
                    placeholder="Enter product price"
                  />
                  <ErrorMessage
                    name="price"
                    component={"div"}
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Mô tả:
                  </label>
                  <Field
                    type="text"
                    id="description"
                    name="description"
                    className="form-control"
                    placeholder="Enter product description"
                  />
                  <ErrorMessage
                    name="description"
                    component={"div"}
                    className="text-danger"
                  />
                </div>
                <div>
                  <button class="btn btn-primary mx-2" type={"submit"}>
                    Sửa
                  </button>
                  <Link to={"/list"} class="btn btn-secondary mx-2">
                    Trở lại
                  </Link>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditProduct;
