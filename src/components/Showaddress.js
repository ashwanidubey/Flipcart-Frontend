import React from 'react'

export default function Showaddress({address,show,setIsAddressSelected}) {
  return (
    <>
    <input type="checkbox" checked={show } />
    <div>
        {address.address}
    </div>
    {show && <button onClick={()=>{setIsAddressSelected(true)}}>Select Address</button>}
    </>
  )
}
