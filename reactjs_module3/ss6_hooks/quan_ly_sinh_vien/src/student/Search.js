import React,{useRef} from 'react';

const SearchStudent = ({onSearch, onReset})=>{
    const nameRef = useRef();
    const handleSearch = ()=>{
        const name= nameRef.current.value;
        onSearch(name)
    }
    return (
        <>
        <form style={{margin: '3px 0'}}>
            <input style={{margin: '0 10px'}} ref={nameRef} className={' w-25'} type='text' placeholder='Nhập Name cần tìm'/>
            <button onClick={handleSearch} className='btn btn-sm btn-info' type='button'>Search</button>
            <button onClick={onReset} className='btn btn-sm btn-info' type='button'>Reset</button>
        </form>
        </>
    )
}
export default SearchStudent;