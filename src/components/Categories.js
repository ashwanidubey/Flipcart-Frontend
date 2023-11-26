import React from 'react';
import { Link } from 'react-router-dom';
      
export default function Categories({filter,setFilter}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mx-5 px-5">
      <div className="container-fluid mx-5">
        <div className="collapse navbar-collapse  ml-auto" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">

               <Link className={`navbar-brand ${filter.categories==="All"?"bg-primary text-white":""}`} onClick={(e)=>{
                  //e.preventDefault();
                 setFilter({...filter,["categories"]:"All"})
                  }}> All</Link>
 
            
            </li>
            <li className="nav-item">
            <Link className={`navbar-brand ${filter.categories==="Electronics"?"bg-primary text-white":""}`} onClick={()=>{setFilter({...filter,["categories"]:"Electronics"})}}>Electronics</Link>
            </li>
            <li className="nav-item">
            <Link className={`navbar-brand ${filter.categories==="Kitchen Appliances"?"bg-primary text-white":""}`} onClick={()=>{setFilter({...filter,["categories"]:"Kitchen Appliances"})}}> Kitchen Appliances</Link>
            </li>
            <li className="nav-item">
            <Link className={`navbar-brand ${filter.categories==="Small Home Appliances"?"bg-primary text-white":""}`} onClick={()=>{setFilter({...filter,["categories"]:"Small Home Appliances"})}}> Small Home Appliances</Link>
            </li>
            <li className="nav-item">
            <Link className={`navbar-brand ${filter.categories==="Footwear"?"bg-primary text-white":""}`} onClick={()=>{setFilter({...filter,["categories"]:"Footwear"})}}>Shoes</Link>
      
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
