import React, { useState, useEffect } from "react";
import { deleteProduct, getProduct } from "../apiMain/ApiListProduct";
import DeleteProduct from "./Delete";
import { Link } from "react-router-dom";

const List = () => {
  const [products, setProduct] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [productDelete, setProductDelete] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const listProduct = await getProduct();
      setProduct(listProduct);
    };
    fetchData();
  }, []);
  const handleShowModal = (product) => {
    setIsShowModal(!isShowModal);
    setProductDelete(product);
  };
  const handleDelete = async (id) => {
    await deleteProduct(id);
    const updateList = await getProduct();
    setProduct(updateList);
    setIsShowModal(false);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>Danh sách sản phẩm</h3>
          <Link className="btn btn-success btn-sm" to={"/list/add"}>
            Thêm mới
          </Link>
        </div>

        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr className="text-center">
              <th>#</th>
              <th>Tên Sản Phẩm</th>
              <th>Mô Tả</th>
              <th>Giá</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {products.map((e, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.title}</td>
                <td>{e.description}</td>
                <td>{e.price}</td>
                <td className="text-center">
                  <Link
                    to={"/list/edit/" + e.id}
                    className="btn btn-primary btn-sm mx-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleShowModal(e)}
                    className="btn btn-danger btn-sm mx-2"
                  >
                    Delete
                  </button>
                  <Link
                    to={"/list/detail/" + e.id}
                    className="btn btn-info btn-sm mx-2"
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isShowModal && (
          <DeleteProduct
            onClose={handleShowModal}
            productDelete={productDelete}
            onDelete={handleDelete}
          />
        )}
      </div>
    </>
  );
};
export default List;
