import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import HeaderStudent from "./Main/Header";
import ListStudent from "./Main/ListStudent";
import AddStudent from "./Main/AddStudent";
import { ToastContainer } from "react-toastify";
import RegisterStudent from "./Main/Register";

function App() {
  return (
    <>
        <ToastContainer />
        <Routes>
          <Route path={"/"} element={<Login />}></Route>
          <Route path={"/homepage"} element={<HeaderStudent />} />
          <Route path={"/list"} element={<ListStudent />} />
          <Route path={"/list/add"} element={<AddStudent />} />
          <Route path={"/register"} element={<RegisterStudent />} />
        </Routes>
    </>
  );
}

export default App;
