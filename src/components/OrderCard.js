import React, { useEffect, useState } from 'react'
import { FcCheckmark } from "react-icons/fc";
import { TbBrandDaysCounter } from "react-icons/tb";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default function OrderCard({Image,title, status,date , orderId,MyOrders,setMyOrders}) {
    const host = process.env.REACT_APP_HOST
    const [daysDifference,setDaysDifference]=useState(0);
    const state=useSelector((state) => state)
    const mycredentials = state.credentials;     
    useEffect(()=>{
        const oldDate = new Date(date);
        const today = new Date();
    
        const timeDifference = Math.abs(today - oldDate);

        setDaysDifference(Math.floor(timeDifference / (1000 * 60 * 60 * 24))+1);
    })
    const cancelOrder=()=>{
        
        fetch(`${host}/orders/cancelorder`,{
              method:"POST",
              headers:{ "Content-Type": "application/json"
                       ,"token":mycredentials?mycredentials.token : ""
                    },
              body: JSON.stringify({orderId})

        }).
        then((response)=>response.json()).
        then((response)=>{
           
            fetch(`${host}/orders/findorder`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "token": mycredentials?mycredentials.token : ""
                }
            }).
            then((data)=>data.json()).
            then((data)=>{
              toast("order cancel")
              data && data.productlist ?  setMyOrders(data.productlist) : setMyOrders(x=>x)
            })
        }).catch(()=>{
            toast("Internal serer error")
        })
    }
  
    return (
        <div class="card mb-3" style={{ "max-width": "800px"  }}>
            
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={Image} className="img-fluid" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        {
                            status!="Canceled"  ?<>  
                            <p class="card-text">{status} < FcCheckmark /></p>
                            <p class="card-text">In Transit {daysDifference>=4 ? < FcCheckmark />: <TbBrandDaysCounter />}</p>
                            <p class="card-text">Out for Delivery {daysDifference>=5 ? < FcCheckmark />: <TbBrandDaysCounter />}</p>
                            <p class="card-text">Delivered {daysDifference>=6 ? < FcCheckmark />: <TbBrandDaysCounter />}</p>
                           {  daysDifference<6 && <button onClick={cancelOrder}>cancel order</button>}
                            </>:
                            <p class="card-text">{status}</p>
                        }
                      
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
