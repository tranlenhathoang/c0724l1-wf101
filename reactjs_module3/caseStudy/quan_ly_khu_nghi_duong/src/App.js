
import './App.css';
import {Routes, Route} from 'react-router-dom';
import HeaderResort from './main/Header';
import ListResort from './main/body/List';
import AddNewRoom from './main/body/Addroom';

function App() {
  return (
    <>
    <HeaderResort/>
    <Routes>
        <Route path={'/list'} element={<ListResort/>}/>
        <Route path={'/list/addRoom'} element={<AddNewRoom/>}/>
        {/* <Route path={'/home'} element={</>}/> */}
    </Routes>
    </>
  );
}

export default App;
