import{BrowserRouter , Route, Routes} from "react-router-dom"

import ListOfStudent from "./Components/ListOfStudents"
import Welcome from "./Components/Welcome"
import AddStudent from "./Components/AddStudent"
import Navbar from "./Components/Navbar"

 
function App() {
  
  return (
    <>
         <BrowserRouter>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Welcome/>}  />
                    <Route path="/allStudent" element={<ListOfStudent/>}/>
                    
                    <Route path="/addStudent" element={<AddStudent/>} />
                    <Route path="/addStudent/:id" element={<AddStudent/>} />
                </Routes>
            </div>
        </BrowserRouter>
    </>
  )
}

export default App
