import React from 'react'
/*{
    inputAddress: '',
    inputLocality: '',
    inputCity: '',
    inputState: '',
    inputZip: '',
  } */
export default function Showaddress({address,show,setIsAddressSelected,setAddress,addresses}) {
  const handleDelete=()=>{
    
    const updatedAddresses = addresses.filter((addr) => {
      const status=(addr.inputAddress === address.inputAddress && addr.inputLocality === address.inputLocality &&  addr.inputCity === address.inputCity && addr.inputZip === address.inputZip && addr.inputState === address.inputState)
     
      return !status});
   
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
    setAddress(updatedAddresses);

  }
  return (
    <>
    <div className={`card ${show && "bg-info"} py-2`} style={{ cursor: 'pointer' }}>
   
    <div class="card-body">
      <p>click on cart to select</p>
    <h5 class="card-title">{address.inputAddress+"  "},  {address.inputLocality} </h5>
    <p class="card-text">{address.inputCity+" "},{address.inputState +" "},{address.inputZip}</p>
    <div className='px-5 d-flex justify-content-between'>
    <button onClick={handleDelete}>Delete Address</button>
    {show && <button  onClick={()=>{setIsAddressSelected(true)}}>Select Address</button>}
   
    </div>
    
     </div>
    
    <div>
        
        
        
    </div>
    </div>
    </>
  )
}
