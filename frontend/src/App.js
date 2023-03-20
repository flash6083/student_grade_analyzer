import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; 

import Navbar from './components/navbar/navbar';
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import AdminPage from "./pages/Admin";
import StudentPage from "./pages/Student";
import AddStudentPage from "./pages/AddStudent";

function App() {
  // const [admin, setAdmin] = useState(false)
  // const location = useLocation()

  // useEffect(() => {
  //   const {pathname} = location
  //   if(pathname === '/admin')
  //     setAdmin(true)
  // }, []);

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/student/:id" element={<StudentPage/>}/>
        <Route path="/add-student" element={<AddStudentPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
