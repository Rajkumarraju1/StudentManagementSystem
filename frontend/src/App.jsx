import{BrowserRouter , Route, Routes} from "react-router-dom"

import ListOfStudent from "./Components/ListOfStudents"
import Welcome from "./Components/Welcome"
import AddStudent from "./Components/AddStudent"

 
function App() {
  
  return (
    <>
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome/>}  />
                <Route path="/allStudent" element={<ListOfStudent/>}/>
                
                <Route path="/addStudent" element={<AddStudent/>} />
                <Route path="/addStudent/:id" element={<AddStudent/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
