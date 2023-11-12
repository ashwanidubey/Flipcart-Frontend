
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../State/actions';
import Signup from "./Signup";
import Footer from "./Footer";
import Home from "./Home";
import CardDesc from "./CardDesc";


function Routers() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch(); 
  //onClick={() => dispatch(increment())} 
  return (
      <BrowserRouter>      
      <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carddesc" element={<CardDesc />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      <Footer />  
      </BrowserRouter>
  );
}

export default Routers;
