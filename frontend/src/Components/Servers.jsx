import axios from "axios"

const BaseUrl="http://localhost:8080/Student";
const desUrl="http://localhost:8080/designation"

export const getStudent=()=>{
   return axios.get(BaseUrl);
}

export const saveStudent=(student)=>{
    return axios.post(BaseUrl,student)
}
export const saveDesignation=()=>{
    return axios.get(desUrl);
}
 

export const deleteStudent=(id)=>{
    return axios.delete(`${BaseUrl}/${id}`);
}

export const updateStudent=(id,student)=>{
    return axios.put(`${BaseUrl}/${id}`,student)
}

export const getStudentById=(id)=>{
    return axios.get(`${BaseUrl}/${id}`)
}