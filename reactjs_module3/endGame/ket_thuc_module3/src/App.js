import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./main/Header";
import List from "./main/List";
import Home from "./main/Home";
import Detail from "./main/Detail";
import AddProduct from "./main/Add";
import EditProduct from "./main/Edit";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} element ={<Home/>}/>
        <Route path={"/list"} element={<List/>}/>
        <Route path={'/list/detail/:id'} element={<Detail/>}/>
        <Route path={"/list/add"} element={<AddProduct/>}/>
        <Route path={'/list/edit/:id'} element={<EditProduct/>}/>
      </Routes>
    </>
  );
}

export default App;
