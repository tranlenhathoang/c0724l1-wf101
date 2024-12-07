
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import HeaderStudent from './Main/Header';

function App() {
  return (
    <>
    <Routes>
      <Route path={'/'} element={<Login/>}></Route>
      <Route path={'/homepage'} element={<HeaderStudent/>}/>
    </Routes>
    </>
  );
}

export default App;
