import { BrowserRouter,Routes, Route } from "react-router-dom"
import Register from "./component/Register"
import Login from "./component/Login"
import Home from "./user/home"
import CreateTask from "./user/CreateTask"
import Header from "./component/Header"
import Dashboard from './admin/Dashboard'
import Edit from './admin/Edit'
import Create from './admin/Create'
import Task from "./admin/Task"
import ApproveTask from "./admin/ApproveTask"

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
         <Route path="/register" element={<Register/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/home" element={<><Header/><Home/></>}/>
         <Route path="/create-task" element={<><Header/><CreateTask/></>}/>
         <Route path="/dashboard" element={<><Header/><Dashboard/></>}/>
         <Route path='/create-user' element={<><Header/><Create/></>}/>
         <Route path='/taskarea' element={<><Header/><Task/> </>}/>
         <Route path="/edit/:id" element={<><Header/><Edit/></>}/>
         <Route path="/task/:id" element={<><Header/> <ApproveTask/></>}/>
         <Route path="/*" element={<Login/>}/>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
