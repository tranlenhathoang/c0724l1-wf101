import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const infoStudents =[
  {
    company: 'Hoàng',
    contact: 'Việt Nam',
    country: 'Huế',
  },
  {
    company: 'Phong',
    contact: 'Thái Lan',
    country: 'Bangkok',
  },
  {
    company: 'Phúc',
    contact: 'Indonesia',
    country: 'Bali',
  },
  {
    company: 'Linh',
    contact: 'Malaysia',
    country: 'KualaLumpur',
  },
  {
    company: 'Thuý',
    contact: 'Việt Nam',
    country: 'Hồ Chí minh',
  },
];
const displayTable = <>
    <h4 style={{marginLeft: 10}}>Students</h4>
    <table className={'table table-dark'}> 
      <thead>
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {infoStudents.map((e,i)=>(
        <tr key={i}>
            <th>{e.company}</th>
            <th>{e.contact}</th>
            <th>{e.country}</th>
        </tr>
        ))};
      </tbody>
    </table>
</>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  displayTable
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
