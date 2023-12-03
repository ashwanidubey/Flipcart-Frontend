import React, { useState, useEffect } from 'react';
import Card from './Card';
import Carousal from './Carousal';
import {  useDispatch , useSelector } from 'react-redux';
import { setIsHome} from '../State/actions';
import { toast } from 'react-toastify';
const Home = ({filter,setFilter}) => {
  const host = process.env.REACT_APP_HOST
  const [data, setData] = useState([]);
  const [showdata, setShowData] = useState([]);
  const dispatch = useDispatch();
  const isHome =  useSelector((state) => state.isHome);
  useEffect(() => {
   
    if(!isHome)
      {
        setFilter({categories:"All",rating:0,sortby:"Title",order:"ascending"})
        dispatch(setIsHome())}
    fetch(`${host}/products/searchall`)
      .then((response) => response.json())
      .then((result) => {
       
        setData(result.items);
        let filtereddata=result.items.filter((item)=>{
          return (item.Sub_Category===filter.categories || filter.categories==="All")
        }).filter((item)=>{
          return (item.Stars>=filter.rating )
        }).sort((a,b)=>{
               if(filter.sortby==="Title")
               {
                if(filter.order==="ascending")
                   return  a.Title.localeCompare(b.Title)
                else
                   return  b.Title.localeCompare(a.Title)
               }
               else{
                  if(filter.order==="ascending")
                      return a[filter.sortby]-b[filter.sortby]
                  else
                     return b[filter.sortby]-a[filter.sortby]
               }
              
        })
        setShowData(filtereddata)
       
      })
      .catch((error) => {
        toast("some internal error")
      });

  }, []);
  useEffect(() => {
    let filtereddata=data.filter((item)=>{
      return (item.Sub_Category===filter.categories || filter.categories==="All")
    }).filter((item)=>{
      return (item.Stars>=filter.rating )
    }).sort((a,b)=>{
           if(filter.sortby==="Title")
           {
            if(filter.order==="ascending")
               return  a.Title.localeCompare(b.Title)
            else
               return  b.Title.localeCompare(a.Title)
           }
           else{
              if(filter.order==="ascending")
                  return a[filter.sortby]-b[filter.sortby]
              else
                 return b[filter.sortby]-a[filter.sortby]
           }
          
    })
    
    setShowData(filtereddata)
   
  }, [filter]);

  return (
    <div className="container px-4 mx-3">
    <Carousal />
    <div className="container">
      <div className="row" style={{ justifyContent: 'center' }}>
        {showdata &&
          showdata.map((item, id) => (
            <div key={id} className="col-md-4 py-3">
              <Card id={id} item={item} />
            </div>
          ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
