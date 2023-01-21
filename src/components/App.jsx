// import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "pages/Home/Home";
import Register from "pages/Register/Register";
import Login from "pages/Login/Login";
import Contacts from "pages/Contacts/Contacts";
import Container from "./Container/Container";
import AppBar from "./AppBar/AppBar";


// const Home=lazy(()=>import("../pages/Home/Home"))
// const Register=lazy(()=>import("../pages/Register/Register"))
// const Login=lazy(()=>import("../pages/Login/Login"))
// const Contacts=lazy(()=>import("../pages/Contacts/Contacts"))

const App = () => {
  return (
    <>
    <Container />
      <AppBar/>
     <Routes>
        <Route exact = "true" path="/" element={<Home />} />
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts/>} />
      </Routes>
    </>
  );
};

export default App