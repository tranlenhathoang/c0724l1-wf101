import axios from 'axios';

export async function getCategory(){
    try{
        const response = await axios.get("http://localhost:8080/listCategory")
        return response.data;
    }catch(e){
        return [];
    }
}