import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import { RequireToken } from "./components/Auth";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Employee from "./components/employee";
import Profile from "./components/profile";
import AddEmployee from "./components/addEmployee";
import EditEmployee from "./components/editEmployee";

function App() {
  return (
    <div className="app">
        <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
               
              <Route path='/' element={
                  <RequireToken>
                    <Dashboard />
                  </RequireToken>
                  }>
                  <Route path='' element={<Home />}></Route>
                  <Route path='/employee' element={<Employee />}></Route>
                  <Route path='/profile' element={<Profile />}></Route>
                  <Route path='/create' element={<AddEmployee />}></Route>
                  <Route path='/employeeedit/:id' element={<EditEmployee />}></Route>
              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
