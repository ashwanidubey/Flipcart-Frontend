import React from 'react';

export default function Categories() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mx-5 px-5">
      <div className="container-fluid mx-5">
        <div className="collapse navbar-collapse  ml-auto" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                All
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Electronics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Kitchen Appliances
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Small Home Appliances
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shoes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
