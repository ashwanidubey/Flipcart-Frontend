
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";



function Routers() {
  
  return (
      <BrowserRouter>      
      <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<h1>home</h1>} />
            <Route path="/login" element={<h1>login</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default Routers;
