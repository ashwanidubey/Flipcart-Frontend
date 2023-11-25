import React, { useState, useEffect } from 'react';
import Card from './Card';
import Carousal from './Carousal';
import {  useDispatch , useSelector } from 'react-redux';
import { paymentDetails,setIsHome} from '../State/actions';
const Home = () => {
  const host = process.env.REACT_APP_HOST
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const isHome =  useSelector((state) => state.isHome);
  useEffect(() => {
    if(!isHome)
      dispatch(setIsHome())
    fetch(`${host}/products/searchall`)
      .then((response) => response.json())
      .then((result) => {
        //console.log(result.items);
        setData(result.items);
      })
      .catch((error) => {
        //console.log(error);
      });
  }, []);

  return (
    <>
    <Carousal />
    <div className="container">
      <div className="row">
        {data &&
          data.map((item, id) => (
            <div key={id} className="col-md-4 mb-4">
              <Card id={id} item={item} />
            </div>
          ))}
      </div>
    </div>
    </>
  );
};

export default Home;
