import axios from "axios"


const BASE_URL = "https://studentmanagementsystem-ozai.onrender.com/Student";
const DES_URL = "https://studentmanagementsystem-ozai.onrender.com/designation";

export const getStudent = () => {
   return axios.get(BASE_URL);
}

export const saveStudent = (student) => {
    return axios.post(BASE_URL, student);
}

export const saveDesignation = () => {
    return axios.get(DES_URL);
}

export const deleteStudent = (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
}

export const updateStudent = (id, student) => {
    return axios.put(`${BASE_URL}/${id}`, student);
}

export const getStudentById = (id) => {
    return axios.get(`${BASE_URL}/${id}`);
}