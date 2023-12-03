import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import signup from '../Functions/signup';
import { useSelector, useDispatch } from 'react-redux';
import { credentials,  unsetIsHome } from '../State/actions';
import { useNavigate } from 'react-router-dom';
import validateSignup from '../Functions/validateSignup';
import { toast } from 'react-toastify';

export default function SignUp() {
  const state = useSelector((state) => state);
  const isLoggedin = state.isLoggedin;
  const isHome = state.isHome;

  useEffect(() => {
    if (isLoggedin) {
      navigate('/');
    }
    if (isHome) dispatch(unsetIsHome());
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [credential, setCredential] = useState({ name: "", email: "", password: "", cpassword: "" });
  const [validationErrors, setValidationErrors] = useState({});
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setCredential({ ...credential, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const validationResult = validateSignup(credential);

    if (validationResult.status) {
      setValidationErrors({});
      return true;
    } else {
      setValidationErrors(validationResult.errors);
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (handleValidation()) {
      setLoading(true);
      const response = await signup(credential.name, credential.email, credential.password);
      setLoading(false);

      if (response.success) {
        toast("Sign up successful");
        const { name, email, token } = response;
        dispatch(credentials({ name, email, token }));
        localStorage.setItem('credential', JSON.stringify({ name, email, token, isLoggedin: true }));
        navigate('/');
      } else {
        toast(response.message);
      }
    }
  };

  return (
    <>
      {!loading ? (
        <div className="container-fluid p-5 " style={{ height: '95vh' }}>
          <div className="row h-100">
            {/* Left Side (Dummy Content) */}
            <div className="col-md-5 bg-primary text-white p-3">
              <h2>Dummy</h2>
              <p>Content</p>
            </div>

            {/* Right Side (SignUp Form) */}
            <div className="col-md-5 p-3">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input type="text" className={`form-control ${validationErrors.name ? 'is-invalid' : ''}`} id="name" name="name" onChange={handleChange} />
                  {validationErrors.name && <div className="invalid-feedback">{validationErrors.name}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input type="email" className={`form-control ${validationErrors.email ? 'is-invalid' : ''}`} id="email" aria-describedby="emailHelp" name="email" onChange={handleChange} />
                  {validationErrors.email && <div className="invalid-feedback">{validationErrors.email}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className={`form-control ${validationErrors.password ? 'is-invalid' : ''}`} id="password" name="password" onChange={handleChange} />
                  {validationErrors.password && <div className="invalid-feedback">{validationErrors.password}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input type="password" className={`form-control ${validationErrors.cpassword ? 'is-invalid' : ''}`} id="confirmPassword" name="cpassword" onChange={handleChange} />
                  {validationErrors.cpassword && <div className="invalid-feedback">{validationErrors.cpassword}</div>}
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                  Sign Up
                </button>
              </form>

              {/* Already have an account? Login */}
              <div className="mt-3">
                <p className="text-center">
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div >
      ) : (
        <>... please wait</>
      )}
    </>
  );
}
