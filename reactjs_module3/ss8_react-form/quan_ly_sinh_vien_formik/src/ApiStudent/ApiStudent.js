import axios from 'axios';

  export async function getStudent() {
    try{
      const response = await axios.get("http://localhost:8080/listStudent");
      console.log(response);
      
      return response.data;
    }catch(e){
      return [];
    }
  };
  export async function addStudent(student){
    try{
      const response = await axios.post("http://localhost:8080/listStudent",student);
      return response.data;
    }catch(e){

    }
  
  }
  export async function deleteStudent(id){
    try {
       await axios.delete(`http://localhost:8080/listStudent/${id}`)
    }catch(e){

    }
  }