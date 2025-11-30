import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Algorithms from "../pages/Algorithms";
import Electronics from "../pages/Electronics";
import Databases from "../pages/Databases";
import Networking from "../pages/Networking";
import Contact from "../pages/Contact";
import ITBasic from "../pages/ITBasic";

export default function AppRouter(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/algorithms" element={<Algorithms />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/databases" element={<Databases />} />
      <Route path="/networking" element={<Networking />} />
      <Route path="/itbasics" element={<ITBasic/>}></Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}