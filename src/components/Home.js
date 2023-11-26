import React, { useState, useEffect } from 'react';
import Card from './Card';
import Carousal from './Carousal';
import {  useDispatch , useSelector } from 'react-redux';
import { setIsHome} from '../State/actions';
const Home = ({filter,setFilter}) => {
  const host = process.env.REACT_APP_HOST
  const [data, setData] = useState([]);
  const [showdata, setShowData] = useState([]);
  const dispatch = useDispatch();
  const isHome =  useSelector((state) => state.isHome);
  useEffect(() => {
    console.log(filter)
    if(!isHome)
      {
        setFilter({categories:"All",rating:0,sortby:"Title",order:"ascending"})
        dispatch(setIsHome())}
    fetch(`${host}/products/searchall`)
      .then((response) => response.json())
      .then((result) => {
        //console.log(result.items);
        setData(result.items);
        let filtereddata=result.items.filter((item)=>{
          console.log((item.Sub_Category===filter.categories || filter.categories==="All"))
          return (item.Sub_Category===filter.categories || filter.categories==="All")
        }).filter((item)=>{
          return (item.Stars>=filter.rating )
        }).sort((a,b)=>{
               if(filter.sortby=="Title")
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
        console.log(filtereddata)
      })
      .catch((error) => {
        //console.log(error);
      });

  }, []);
  useEffect(() => {
    let filtereddata=data.filter((item)=>{
      return (item.Sub_Category===filter.categories || filter.categories==="All")
    }).filter((item)=>{
      return (item.Stars>=filter.rating )
    }).sort((a,b)=>{
           if(filter.sortby=="Title")
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
    console.log(showdata)
  }, [filter]);

  return (
    <>
    <Carousal />
    <div className="container">
      <div className="row">
        {showdata &&
          showdata.map((item, id) => (
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
