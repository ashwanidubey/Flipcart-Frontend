import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { credentials } from '../State/actions';

const Navbar = () => {
  const state=useSelector((state) => state)
  const isLoggedin = state.isLoggedin;
  const mycredentials = state.credentials;
  const dispatch = useDispatch();
  useEffect(() => {
   //console.log(isLoggedin)
   //console.log(credentials)
   //console.log(state)
  
   
  })
  const handlelogout=()=>{
  // console.log("hello")
   dispatch(credentials({}))
   localStorage.setItem('credential',JSON.stringify({name:"",email:"",token:"",isLoggedin:false}))
       
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Easykart</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex w-50" role="search">
            <input className="form-control me-2 w-100" type="search" placeholder="Search" aria-label="Search" />
          </form>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
            <li className="nav-item me-3">
              <Link className="nav-link" to="/construction">Become a Seller</Link>
            </li>

            <li className="nav-item dropdown me-3">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {isLoggedin?mycredentials.name:"Signin"}
              </Link>
              <ul className="dropdown-menu">
              {isLoggedin?  <li><Link className="dropdown-item" onClick={handlelogout}>Logout</Link></li> :
                <li><Link className="dropdown-item" to="/login">Login</Link></li>}
                <li><Link className="dropdown-item" to="/construction">Easikart Plus Zone</Link></li>
                <li><Link className="dropdown-item" to="/orders">Orders</Link></li>
                <li><Link className="dropdown-item" to="/construction">Wishlist</Link></li>
                <li><Link className="dropdown-item" to="#">Rewards</Link></li>
                <li><Link className="dropdown-item" to="/construction">Gift Cards</Link></li>
              </ul>
            </li>

            <li className="nav-item me-3">
              <Link className="nav-link active" aria-current="page" to="/cart">Cart</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
