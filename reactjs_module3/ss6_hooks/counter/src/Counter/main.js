import React,{useState, useEffect} from 'react';
import { getListRoom } from './ListRoom';
import ShoppingCart from './ShopCart';

const Counter = ()=>{
    const [room, setRoom] = useState([]);
    const [isShopping,setIsShopping] = useState(false);

    useEffect(()=>{
        setRoom(getListRoom());
    },[]);

    const handleCounterOne = (index)=>{
        setRoom((pre)=>pre.map((e,i)=>
                i===index ? {...e, count: e.count + 1 }: e
            )
        );
    };
    const handleSubOne = (index)=>{
        setRoom((pre)=>pre.map((e,i)=>
                i===index ? {...e, count: e.count - 1 }: e
            )
        );
    };
    const handleShopping =()=>{
        setIsShopping(!isShopping);
    }
    return (
        <> 
            {!isShopping && room?.map((e,i)=>(
                <div key={i}>
                    <p>{e?.name}</p>
                    <p>{e?.price}</p>
                    <p>Count:{e?.count}</p>
                    <button onClick={()=>handleSubOne(i)} type='button'>-</button>
                    <button onClick={()=>handleCounterOne(i)} type='button'>+</button>
                </div>
            ))}
            <button onClick={handleShopping} type='button'>Shopping Cart</button>
            {isShopping && <ShoppingCart roomProps={room} />} 
        </>
    );
}
export default Counter;