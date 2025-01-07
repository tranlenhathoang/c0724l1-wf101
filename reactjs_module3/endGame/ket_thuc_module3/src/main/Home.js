import React from "react";

const Home = () => {
  return (
    <>
      <div 
      className="container-fluid d-flex justify-content-center align-items-center min-vh-100" 
      style={{
        backgroundColor: "#3498db",
      }}
    >
      <div className="text-center p-5 border rounded shadow-lg" style={{ backdropFilter: "blur(10px)" }}>
        <h1 className="display-4 text-light">
          Chào mừng bạn đến xem bài thi của Trần Lê Nhật Hoàng
        </h1>
      </div>
    </div>
    </>
  );
};
export default Home;
