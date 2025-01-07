import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../apiMain/ApiListProduct";
import { Link } from "react-router-dom";

const Detail = () => {
  const [product, setProduct] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
  });
  const { id } = useParams();
  useEffect(() => {
    const fetData = async () => {
      let productDetail = await getProductById(id);
      setProduct(productDetail);
    };
    fetData();
  }, [id]);
  return (
    <>
      <div className="container mt-5">
        <div className="card shadow-lg">
          <div className="card-header bg-primary text-white">
            <h4>Chi tiết sản phẩm</h4>
          </div>
          <div className="card-body">
            <h5 className="card-title mb-4">
              <strong>Tên Sản phẩm:</strong> {product.title}
            </h5>
            <p className="card-text">
              <strong>Mô tả:</strong> {product.description}
            </p>
            <p className="card-text">
              <strong>Giá:</strong> {product.price} VNĐ
            </p>
            <div className="d-flex justify-content-between mt-4">
              <Link to={"/list"} className="btn btn-secondary">
                Trở lại danh sách
              </Link>
              <Link to={"/list/edit/" + product.id} className="btn btn-warning">
                Sửa sản phẩm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Detail;
