import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import { useSelector} from 'react-redux';
import Signup from "./Signup";
import Footer from "./Footer";
import Home from "./Home";
import CardDesc from "./CardDesc";
import Checkout from "./Checkout";
import Cart from "./Cart";
import Orders from "./Orders";

import Categories from "./Categories";
import Filter from "./Filter";
import { useState } from "react";
import Search from "./Search";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Routers() {

  const [searched, setSearched] = useState("")
  const [filter, setFilter] = useState({ categories: "All", rating: 0, sortby: "Title", order: "ascending" })
  const isHome = useSelector((state) => state.isHome);

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar searched={searched} setSearched={setSearched} />
      {isHome && <Categories filter={filter} setFilter={setFilter} />}


      {isHome ? (
        <div className='row'>
          <div className="col-md-6  my-3" style={{ "width": "10vw" }}>
            <Filter filter={filter} setFilter={setFilter} />
          </div>
          <div className="col-md-6 row mx-3" style={{ maxHeight: '100vh', "width": "85vw", overflowY: 'auto' }}>
            <Routes>
              <Route path="/" element={<Home filter={filter} setFilter={setFilter} />} />
              <Route path="/carddesc" element={<CardDesc />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/search" element={<Search filter={filter} setFilter={setFilter} searched={searched} setSearched={setSearched} />} />
              <Route path="/construction" element={<h1>Page Under Construction , we are very sorry for inconvenience</h1>} />
              <Route path="/testing" element={<Filter />} />
            </Routes>
          </div>
        </div>
      ) :
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home filter={filter} setFilter={setFilter} />} />
            <Route path="/carddesc" element={<CardDesc />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/search" element={<Search filter={filter} setFilter={setFilter} searched={searched} setSearched={setSearched} />} />
            <Route path="/construction" element={<h1>Page Under Construction , we are very sorry for inconvenience</h1>} />
            <Route path="/testing" element={<Filter />} />
          </Routes>
        </div>}
      <Footer />
    </BrowserRouter>
  );
}

export default Routers;
