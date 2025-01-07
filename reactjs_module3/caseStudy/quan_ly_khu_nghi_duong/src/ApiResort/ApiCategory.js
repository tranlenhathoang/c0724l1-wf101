import axios from 'axios';

export async function getCategory(){
    try{
        const response = await axios.get("http://localhost:8080/category")
        return response.data;
    }catch(e){
        return [];
    }
}