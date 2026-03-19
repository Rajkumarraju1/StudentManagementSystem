import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import { getStudent,deleteStudent} from "./Servers"
import '../Style/ListOfStudent.css'
const ListOfStudent=()=>{

    const navigate = useNavigate();
    const[student, setStudent] = useState([]);

    const loadStudent=()=>{
        getStudent().then((res)=>setStudent(res.data)) 
    }
    useEffect(()=>{ 
         loadStudent();
    },[]);

    const delStudent=(id)=>{
         deleteStudent(id).then(res=> loadStudent())
    }

    

    return(
        <>
        <div className="list">
        <table border={2}  cellPadding={10} rules="all" >
            <thead>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Section</th>
                <th>Ph_number</th>
                <th>Designation</th> 
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    student.map(stu=>(
                        <tr key={stu.id} >
                            <td>{stu.id}</td>
                            <td>{stu.name}</td>
                            <td>{stu.email}</td>
                            <td>{stu.section}</td>
                            <td>{stu.ph_number}</td>
                            <td>{stu.designation?.title}</td>
                            <td>
                                <button onClick={()=>navigate(`/addStudent/${stu.id}`)} >Update</button>
                                <button onClick={()=>delStudent(stu.id)}>Delete</button>
                            </td>
                            
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>

        </>
    )
}
export default ListOfStudent