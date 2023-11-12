import React from 'react';
import {productdesc} from '../State/actions'
import { useNavigate } from 'react-router-dom'
import {  useDispatch } from 'react-redux';
const Card = ({ item, id }) => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const handleClick=(e)=>{
    dispatch(productdesc(item))
    navigate("/carddesc")
   
  }
  return (
    <div className="card" style={{ width: '18rem', height: '100%' , cursor: 'pointer' }} onClick={handleClick}>
      <img
        src={item.Image}
        className="card-img-top"
        alt={item.Title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{item.Title}</h5>
        <p className="card-text">Under RS.{item.Price}</p>
      </div>
    </div>
  );
};

export default Card;
