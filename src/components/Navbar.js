import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { credentials } from '../State/actions';
import { IoCartOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';

const Navbar = ({ searched, setSearched }) => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const isLoggedin = state.isLoggedin;
  const mycredentials = state.credentials;
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    setSearched(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate('/search');
    alert(`Search started for: ${searched}`);
  };

  const handlelogout = () => {
    toast('You are logged out');
    dispatch(credentials({}));
    localStorage.setItem('credential', JSON.stringify({ name: '', email: '', token: '', isLoggedin: false }));
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary" style={{ maxWidth: '100vw' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Easykart
        </Link>
        <button
          className="navbar-toggler  my-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav1"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav1">
          <form className="d-flex  mb-2 mb-lg-0" role="search" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2 w-100 py-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searched}
              onChange={handleSearchChange}
            />
          </form>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
            <li className="nav-item me-3">
              <Link className="nav-link" to="/construction">
                Become a Seller
              </Link>
            </li>

            <li className="nav-item dropdown me-3">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {isLoggedin ? mycredentials.name : 'Signin'}
              </Link>
              <ul className="dropdown-menu">
                {isLoggedin ? (
                  <li>
                    <Link className="dropdown-item" onClick={handlelogout}>
                      Logout
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>
                  </li>
                )}
                <li>
                  <Link className="dropdown-item" to="/construction">
                    Easikart Plus Zone
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/orders">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/construction">
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Rewards
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/construction">
                    Gift Cards
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item me-3">
              <Link className="nav-link active" aria-current="page" to="/cart" style={{ position: 'relative' }}>
                <span
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-10px',
                    color: 'black',
                    borderRadius: '50%',
                    padding: '5px',
                  }}
                >
                  {cartItems.length}
                </span>
                <IoCartOutline />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
