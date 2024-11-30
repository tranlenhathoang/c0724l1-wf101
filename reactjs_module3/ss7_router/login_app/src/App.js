import "./App.css";
import Login from "./main/Login";
import { Routes, Route } from "react-router-dom";
import Employee from "./main/Employee";
import DetailEmployee from "./main/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/employee" element={<Employee />}></Route>
        <Route path="/employee/detail/:id" element={<DetailEmployee/>}></Route>
      </Routes>
    </>
  );
}
export default App;
