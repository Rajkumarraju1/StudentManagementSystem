import { useNavigate } from "react-router-dom"
import ListOfStudent from "./ListOfStudents"
const Welcome=()=>{
    const navigate= useNavigate()
    return(
        <>
        <div className="main-div">
            <h1>welcome to Student Management System</h1>
            <div className="inner-div">
                 <button onClick={()=>navigate("/allStudent")}>All Student</button>
                 <button onClick={()=>navigate("/addStudent")}>To Add</button>
            </div>
        </div>
        

       
        </>
    )
}
export default Welcome