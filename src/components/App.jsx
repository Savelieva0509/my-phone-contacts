import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import  SharedLayout  from "./SharedLayout/SharedLayout";

const Home=lazy(()=>import("../pages/Home/Home"))
const Register=lazy(()=>import("../pages/Register/Register"))
const Login=lazy(()=>import("../pages/Login/Login"))
const Contacts=lazy(()=>import("../pages/Contacts/Contacts"))

export const App = () => {
  return (
     <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login />}/>
      </Route>
   </Routes>
  );
};

export default App