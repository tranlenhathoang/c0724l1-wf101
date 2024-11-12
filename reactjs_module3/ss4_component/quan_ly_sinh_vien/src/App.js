
import './App.css';
import DisplayTable from './main/Table';
import React from 'react';

const listStudent =[
  {
    id: 1,
    name: 'Hoàng',
    age: 28,
    add: 'Huế'
  },
  {
    id: 2,
    name: 'Châu',
    age: 27,
    add: 'Huế'
  },
  {
    id: 3,
    name: 'Nam',
    age: 28,
    add: 'Đà Nẵng'
  },
  {
    id: 4,
    name: 'Nguyên',
    age: 30,
    add: 'Hồ Chí Minh'
  }
]
function App() {
  return (
    <>
      <DisplayTable list= {listStudent}/>
    </>
  );
}

export default App;
