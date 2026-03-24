import { useEffect, useState } from "react"
import { saveStudent,updateStudent,saveDesignation,getStudentById } from "./Servers"
import ListOfStudent from "./ListOfStudents";
import {  useNavigate, useParams } from "react-router-dom";

const AddStudent=()=>{
    const navigate=useNavigate();
    const {id} =useParams();

    const[student, setStudent] = useState({
        name:"",
        email:"",
        section:"",
        ph_number:"",
        designation: ""
    });
    const[designation, setDesignation] = useState([]);
    useEffect(()=>{
        saveDesignation()
            .then(res=>{
                console.log("Fetched designations:", res.data);
                setDesignation(res.data);
            })
            .catch(err => {
                console.error("Error fetching designations:", err);
                alert("Error fetching designations: " + (err.response?.data?.message || err.message));
            });

        if(id){
            getStudentById(id)
                .then(res=>{
                    setStudent({...res.data, designation:res.data.designation?.id});
                })
                .catch(err => {
                    console.error("Error fetching student by ID:", err);
                    alert("Error fetching student data: " + (err.response?.data?.message || err.message));
                });
        }
    },[id]);

    
    
    const handelChanges=(e=>{
        setStudent({...student,[e.target.name]: e.target.value})
    })
    const handleSubmit=((e)=>{
        e.preventDefault();
        
        if (!student.designation) {
            alert("Please select a designation.");
            return;
        }

        const payload={
            name: student.name,
            email: student.email,
            section: student.section,
            ph_number: student.ph_number,
            designation: {
                id: Number(student.designation)
            }
        }

     if(id){
            updateStudent(id,payload)
        .then(()=>{
            alert("Student updated")
            navigate("/allStudent")
    })
        .catch((err)=>alert("error while adding Student"+err))
     }else{
        saveStudent(payload)
        .then(()=>{
            alert("Student added")
            navigate('/allStudent');
        })
        .catch((err)=>alert("error while adding"+err))
     }
    })





    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={student.name} placeholder="enter the name"  onChange={handelChanges}/><br />
            <input type="email" name="email" value={student.email} placeholder="enter email" onChange={handelChanges}/><br />
            <input type="text" name="section" value={student.section} placeholder="enter your Section" onChange={handelChanges} /> <br />
            <input type="number" name="ph_number" value={student.ph_number} placeholder="enter your number" onChange={handelChanges}/><br />
            <select name="designation" value={student.designation} onChange={handelChanges} >
                <option value="">select an option</option>
                {
                    designation.map(d=>(
                        <option  key={d.id} value={d.id}>
                            {d.title}
                        </option>
                    ))
                }
            </select>
             <button type="submit"  >save  </button>
        </form>
        </>
    )
}
export default AddStudent