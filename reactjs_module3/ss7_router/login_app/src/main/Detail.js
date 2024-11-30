import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { findById } from './EmployeeList';
import {Link} from 'react-router-dom'

const DetailEmployee = ()=>{
    const [detailEmployee, setDetailEmployee]= useState({id:'', name:''})
    const {id} = useParams();
    useEffect(()=>{
        const employee =findById(Number(id))
        setDetailEmployee(employee);
    },[id]);
    return(
        <>
        <Link className="nav-link active" to='/employee'>Back</Link>
        <h3>Thông Tin Chi Tiết</h3>
            <p>ID: {detailEmployee.id}</p>
            <p>NAME: {detailEmployee.name}</p>
        </>
    )
}
export default DetailEmployee;