
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import HeaderStudent from './Main/Header';
import ListStudent from './Main/ListStudent';
import AddStudent from './Main/AddStudent';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer/>
    <Routes>
      <Route path={'/'} element={<Login/>}></Route>
      <Route path={'/homepage'} element={<HeaderStudent/>}/>
      <Route path={'/list'} element={<ListStudent/>}/>
      <Route path={'/list/add'} element={<AddStudent/>}/>
    </Routes>
    </>
  );
}

export default App;
