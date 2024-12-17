import axios from "axios";

export const  checkLogin = async (user)=>{
    try {
        const response= await axios.get("http://localhost:8080/infoLogin");
        const account = response.data.find(ac => ac.email === user.email && ac.password === Number(user.password));
        if (account){
            return account;
        }else {
            return null;
        }
    } catch(e){

    }
} 
export const addRegister = async (account)=>{
    try {
        const response = await axios.post('http://localhost:8080/infoLogin',account)
        return response.data;
    }catch(e){
        console.log('lỗi');
    }
}