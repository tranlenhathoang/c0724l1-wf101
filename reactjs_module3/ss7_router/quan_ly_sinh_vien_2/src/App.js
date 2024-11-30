import "./App.css";
import HeaderStudent from "./student/Header";
import { Route, Routes } from "react-router-dom";
import ListStudent from "./student/ListStudent";
import AddStudent from "./student/AddStudent";

function App() {
  return (
    <>
      <HeaderStudent />
      <Routes>
      <Route path={"/"} element={''}></Route>
        <Route path={"/product"} element={<ListStudent />}></Route>
        <Route path={"/product/add"} element={<AddStudent />}></Route>
      </Routes>
    </>
  );
}

export default App;
