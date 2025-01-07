import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { deleteRoom, getResort, searchList } from "../../ApiResort/ApiListResort";
import DeleteRoom from "./DeleteRoom";
import { getCategory } from "../../ApiResort/ApiCategory";

const ListResort = () => {
  const [rooms, setRoom] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [roomDelete, setRoomDelete] = useState("");
  const [category, setCategory] = useState([]);
  const searchNameRef = useRef();
  const searchCategoryRef = useRef();
  useEffect(() => {
    const fetchData = async () => {
      const listRoom = await getResort();
      setRoom(listRoom);
    };
    const fetCategory = async()=>{
        const categoryList = await getCategory();
        setCategory(categoryList);
    }
    fetchData();
    fetCategory();
  }, []);
  const handleShowModal = (room) => {
    setIsShowModal(!isShowModal);
    setRoomDelete(room);
  };
  const handleDelete = async (id) => {
    await deleteRoom(id);
    const updateListRoom = await getResort();
    setRoom(updateListRoom);
    setIsShowModal(false);
  };
  const handleSearch = async (even) =>{
    even.preventDefault();
    const name = searchNameRef.current.value;
    const categoryId = searchCategoryRef.current.value;
    const search = await searchList(name, categoryId);
    setRoom(search);
  }
  return (
    <>
      <div>
        <Link to="/list/addRoom" className="btn btn-danger">
          ADD ROOM
        </Link>
        <form>
            <input type="text" ref={searchNameRef} placeholder="Enter Search Name"/>
            <select ref={searchCategoryRef}>
                <option value={""}>-------Chọn-------</option>
                {category.map(e =>(
                    <option value={e.id}>{e.name}</option>
                ))}
            </select>
            <button type="submit" onClick={handleSearch}>Search</button>
        </form>
      </div>
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
                  <Link to={`/list/edit/${e.id}`} className="btn btn-primary me-2">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleShowModal(e)}
                    type="submit"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isShowModal && (
        <DeleteRoom
          roomDelete={roomDelete}
          onClose={handleShowModal}
          onDelete={handleDelete}
        />
      )}
    </>
  );
};
export default ListResort;
