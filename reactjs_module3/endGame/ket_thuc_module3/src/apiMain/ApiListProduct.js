import axios from 'axios';

  export async function getProduct() {
    try{
      const response = await axios.get("http://localhost:3001/listProduct");
      return response.data;
    }catch(e){
      return [];
    }
  };
  export async function deleteProduct(id){
    try {
       await axios.delete(`http://localhost:3001/listProduct/${id}`)
    }catch(e){

    }
  };
  export async function getProductById(id) {
    try {
        const  response = await axios.get(`${`http://localhost:3001/listProduct`}/`+id);
        return response.data;

    }catch (e) {
        console.log("lỗi "+e);
        return null;
    }
}
export async function addProduct(product){
    try{
      const response = await axios.post("http://localhost:3001/listProduct",product);
      return response.data;
    }catch(e){

    }
}
export async function productUpdate(id, updateProduct){
    try {
        const response = await axios.put(`http://localhost:3001/listProduct/${id}`, updateProduct);
        return response.data
    }catch(e){

    }
}