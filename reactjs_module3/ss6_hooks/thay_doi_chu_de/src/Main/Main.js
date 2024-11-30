import React, {useState,useEffect} from 'react';

const BackColor =()=>{
    const [color, setColor]= useState('light')
    const handleColor =()=>{
        setColor((pre)=>(pre ==='light' ? 'black' : 'light'));
    }
    const handleSelectColor =(selectColor)=>{
        setColor(selectColor);
    }
    useEffect(()=>{
        document.body.style.background = 
        color === 'light' ? 'white'
        : color === 'black' ? 'black'
        : color;
        document.body.style.color =
        color === 'light' || color === '#fff' ? 'black' : '#fff'
    },[color]);
    return(
        <>
        <div>
            <h2>
                HÃY ĐỔI MÀU CHO TÔI
            </h2>
            <p>Màu hiện tại {color}</p>
            <button onClick={handleColor} type="button">Change</button>
            <select onChange={(e)=>handleSelectColor(e.target.value)} value={color}>
                <option value='light'>Trắng</option>
                <option value='blue'>Xanh Dương</option>
                <option value='pink'>Hồng</option>
                <option value='red'>Đỏ</option>
                <option value='green'>Xanh Lá Cây</option>
            </select>
        </div>
        </>
    )
}
export default BackColor;