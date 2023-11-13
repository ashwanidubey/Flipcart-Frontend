import React from 'react'

export default function Cartcard({item}) {
  return (
    <>
    
    <div className="card mb-3" style={{"max-width": "840px"}}>
    
    <div className="row g-0">
        <div className="col-md-1">
        <input type="checkbox"/>
        </div>
    
      <div className="col-md-3">
        <img src={item.Image} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-7">
        <div className="card-body">
          <h5 className="card-title">{item.Title}</h5>
          <p className="card-text">{item.Description}</p>
          <p>price: {item.Price}</p>
          <button>-</button> 1 <button>+</button>
          <br/>
          <button>remove</button>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
