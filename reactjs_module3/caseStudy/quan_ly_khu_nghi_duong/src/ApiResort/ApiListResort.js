import axios from 'axios';

export async function getResort(){
try {
    const response = await axios.get("http://localhost:8080/listResort");
    return response.data;
}catch (e){
    return [];
}
}

export async function addNewResort(newResort){
    try{
        const response = await axios.post("http://localhost:8080/listResort",newResort);
    }catch(e){

    }
}
