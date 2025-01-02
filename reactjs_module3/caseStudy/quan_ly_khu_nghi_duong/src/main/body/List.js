import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getResort } from "../../ApiResort/ApiListResort";

const ListResort = () => {
  const [rooms, setRoom] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const listRoom = await getResort();
      setRoom(listRoom);
    };
    fetchData();
  }, []);
  return (
    <>
      <Link to="/list/addRoom" className="btn btn-danger">
        ADD ROOM
      </Link>
      <div className={"container mt-3 px-2"}>
        <div className={"row g-3"}>
          {rooms.map((e, i) => (
            <div className={"col-md-4 mb-4"} key={e.id}>
              <div className="card" style={{ width: "100%" }}>
                <img
                  src={e.image}
                  class="card-img-top"
                  alt={e.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{e.name}</h5>
                  <p className="card-text">{e.acg}</p>
                  <Link to="" className="btn btn-primary me-2">
                    Edit
                  </Link>
                  <button type='submit' className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ListResort;
