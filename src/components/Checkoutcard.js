import React from 'react'

export default function Checkoutcard({product}) {
  return (
    <div className="card mb-3" style={{"max-width": "320px"}}>
    
    <div className="row g-0">
        
    
      <div className="col-md-3">
        <img src={product.Image} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-7">
        <div className="card-body">
          <h5 className="card-title">{product.Title}</h5>
          <p>price: {product.Price}</p>
          <p>quantity:{product.quantity || 1} </p>
         
        </div>
      </div>
    </div>
  </div>
  
  )
}
