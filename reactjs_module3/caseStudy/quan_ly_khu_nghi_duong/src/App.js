
import './App.css';
import {Routes, Route} from 'react-router-dom';
import HeaderResort from './main/Header';
import ListResort from './main/body/List';
import AddNewRoom from './main/body/Addroom';
import EditRoom from './main/body/EditRoom';

function App() {
  return (
    <>
    <HeaderResort/>
    <Routes>
        <Route path={'/list'} element={<ListResort/>}/>
        <Route path={'/list/edit/:id'} element={<EditRoom/>}/>
        <Route path={'/list/addRoom'} element={<AddNewRoom/>}/>
        {/* <Route path={'/home'} element={</>}/> */}
    </Routes>
    </>
  );
}

export default App;
