import React,{useRef} from 'react';

const SearchStudent = ({onSearch, onReset})=>{
    const idRef = useRef();
    const handleSearch = ()=>{
        const id= idRef.current.value
        onSearch(id)
    }
    return (
        <>
        <form style={{margin: '3px 0'}}>
            <input style={{margin: '0 10px'}} ref={idRef} className={' w-25'} type='text' placeholder='Nhập ID cần tìm'/>
            <button onClick={handleSearch} className='btn btn-sm btn-info' type='button'>Search</button>
            <button onClick={onReset} className='btn btn-sm btn-info' type='button'>Reset</button>
        </form>
        </>
    )
}
export default SearchStudent;