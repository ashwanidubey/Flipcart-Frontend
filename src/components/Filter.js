import React from 'react';

export default function Filter() {
  return (
    <div className="container-fluid filter-container" style={{ width: '13rem'  }}>
      <div className="row" style={{ width: '13rem' }}>
        <div className="mx-0" style={{ width: '13rem' }}> {/* Add mx-0 to remove horizontal margin */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Filter</h5>

              {/* Placeholder for rating filter */}
              <div className="form-group">
                <label>Rating</label>
                <select className="form-control">
                  <option>More than 1</option>
                  <option>More than 2</option>
                  <option>More than 3</option>
                  <option>More than 4</option>
                </select>
              </div>
              <h5 className="card-title">Sort</h5>
              {/* Placeholder for sorting options */}
              <div className="form-group">
                <select className="form-control">
                  <option>Sort by Name</option>
                  <option>Sort by Rating</option>
                  <option>Sort by Price</option>
                </select>
              </div>
              <div className="form-group">
                <label>order</label>
                <select className="form-control">
                  <option>Ascending</option>
                  <option>Descending</option>
                </select>
              </div>

              {/* Add additional filter options as needed */}
              <div className="py-2">
              <button >Clear All</button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
