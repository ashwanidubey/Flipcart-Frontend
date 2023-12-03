import React, { useState, useEffect } from 'react';
import Card from './Card';
import { toast } from 'react-toastify';

import {  useDispatch , useSelector } from 'react-redux';
import { unsetIsHome} from '../State/actions';
const Search = ({ searched,setSearched}) => {
  const host = process.env.REACT_APP_HOST
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const isHome =  useSelector((state) => state.isHome);
  useEffect(() => {
    
    if(isHome)
      {
        dispatch(unsetIsHome())
      }
    fetch(`${host}/products/search?searchWord=${searched}`)
      .then((response) => response.json())
      .then((result) => {
        
        setData(result.items);
       
      })
      .catch((error) => {
        toast(error);
      });

  }, [searched]);

    
    

  return (
    <>
    <div className="container">
      <div className="row">
        {data && data.length>0?
          data.map((item, id) => (
            <div key={id} className="col-md-4 mb-4">
              <Card id={id} item={item} />
            </div>
          )):<h1>NO ITEM FOUND WITH GIVEN SEARCH</h1>}
      </div>
    </div>
    </>
  );
};

export default Search;
