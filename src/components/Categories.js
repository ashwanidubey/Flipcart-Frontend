import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

export default function Categories({ filter, setFilter }) {
  return (
    <nav  className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container-fluid ">
        {/* Display only on large screens */}
        <div className="collapse navbar-collapse d-lg-block mx-5 px-5" id="navbarNav2">
          <ul className="navbar-nav mx-5 px-5">
            <li className="nav-item">
              <Link
                className={`navbar-brand ${filter.categories === 'All' ? 'bg-primary text-black' : ''}`}
                onClick={() => setFilter({ ...filter, ['categories']: 'All' })}
              >
                All Items
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`navbar-brand ${filter.categories === 'Electronics' ? 'bg-primary text-black' : ''}`}
                onClick={() => setFilter({ ...filter, ['categories']: 'Electronics' })}
              >
                Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`navbar-brand ${filter.categories === 'Kitchen Appliances' ? 'bg-primary text-black' : ''}`}
                onClick={() => setFilter({ ...filter, ['categories']: 'Kitchen Appliances' })}
              >
                Kitchen Appliances
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`navbar-brand ${filter.categories === 'Small Home Appliances' ? 'bg-primary text-black' : ''}`}
                onClick={() => setFilter({ ...filter, ['categories']: 'Small Home Appliances' })}
              >
                Home Appliances
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`navbar-brand ${filter.categories === 'Footwear' ? 'bg-primary text-black' : ''}`}
                onClick={() => setFilter({ ...filter, ['categories']: 'Footwear' })}
              >
                Shoes
              </Link>
            </li>
          </ul>
        </div>

        {/* Display only on small screens */}
        <div className="d-lg-none">
        <div className="navbar-small-screen-container overflow-auto" style={{ maxWidth: '100vw' }}>
         <ul className="navbar-nav flex-row">
            <li className="nav-item">
              <Link
                className={`navbar-brand ${filter.categories === 'All' ? 'bg-primary text-black' : ''} fs-6 mb-1`}
                onClick={() => setFilter({ ...filter, ['categories']: 'All' })}
              >
                All 
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`navbar-brand ${filter.categories === 'Electronics' ? 'bg-primary text-black' : ''} fs-6 mb-1`}
                onClick={() => setFilter({ ...filter, ['categories']: 'Electronics' })}
              >
                Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`navbar-brand ${filter.categories === 'Kitchen Appliances' ? 'bg-primary text-black' : ''} fs-6 mb-1`}
                onClick={() => setFilter({ ...filter, ['categories']: 'Kitchen Appliances' })}
              >
                Kitchen
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`navbar-brand ${filter.categories === 'Small Home Appliances' ? 'bg-primary text-black' : ''} fs-6 mb-1`}
                onClick={() => setFilter({ ...filter, ['categories']: 'Small Home Appliances' })}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`navbar-brand ${filter.categories === 'Footwear' ? 'bg-primary text-black' : ''} fs-6 mb-1`}
                onClick={() => setFilter({ ...filter, ['categories']: 'Footwear' })}
              >
                Shoes
              </Link>


            </li>

            
            
            
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
