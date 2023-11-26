import React from 'react';

export default function Filter({filter,setFilter}) {
  const handleRatingChange = (event) => {
    setFilter({...filter,["rating"]:event.target.value});
  };  
  const handleSortbyChange = (event) => {
    setFilter({...filter,["sortby"]:event.target.value});
  };  
  const handleSortOrder = (event) => {
    setFilter({...filter,["order"]:event.target.value});
  };    
  return (
    <div className="container-fluid filter-container" style={{ width: '13rem'  }}>
      <div className="row" style={{ width: '13rem' }}>
        <div className="mx-0" style={{ width: '13rem' }}> {/* Add mx-0 to remove horizontal margin */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Filter</h5>

              {/* Placeholder for rating filter */}
              <div className="form-group" >
                <label>Rating</label>
                <select className="form-control"  
                   value={filter.rating}     
                   onChange={handleRatingChange}>
                  <option value="0">More than 0</option>
                  <option value="1">More than 1</option>
                  <option value="2">More than 2</option>
                  <option value="3">More than 3</option>
                  <option value="4">More than 4</option>
                </select>
              </div>
              <h5 className="card-title">Sort</h5>
              {/* Placeholder for sorting options */}
              <div className="form-group">
                <select className="form-control"
                 value={filter.sortby}   
                 onChange={handleSortbyChange}>
                  <option value="Title">Sort by Name</option>
                  <option value="Stars">Sort by Rating</option>
                  <option value="Price">Sort by Price</option>
                </select>
              </div>
              <div className="form-group">
                <label>order</label>
                <select className="form-control" 
                    value={filter.order}    
                   onChange={handleSortOrder}>
                  <option  value="ascending">Ascending</option>
                  <option  value="descending">Descending</option>
                </select>
              </div>

              {/* Add additional filter options as needed */}
              <div className="py-2">
              <button onClick={()=>{setFilter({categories:"All",rating:0,sortby:"Title",order:"ascending"})}} >Clear All</button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
