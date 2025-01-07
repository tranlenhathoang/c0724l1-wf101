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
         await axios.post("http://localhost:8080/listResort",newResort);
    }catch(e){

    }
}
export async function deleteRoom(id){
    try {
        await axios.delete(`http://localhost:8080/listResort/${id}`)
    }catch(e){

    }
}

export async function searchList (name, categoryID){
    let url = `${`http://localhost:8080/listResort`}?name_like=${name}&category.id=${categoryID}`;
    if (categoryID == ""){
        url = `${`http://localhost:8080/listResort`}?name_like=${name}`;
    }
    try {
        const response = await axios.get(url);
        return response.data;
    }catch(e){
        return [];
    }
}
export async function roomUpdate (id, updateRoom){
    try {
        const response = await axios.put(`http://localhost:8080/listResort/${id}`, updateRoom);
        return response.data
    }catch(e){

    }
}