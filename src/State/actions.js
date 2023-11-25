export const PRODUCTDESC = 'PRODUCTDESC';
export const CREDENTIALS = 'CREDENTIALS'
export const ISLOGGEDIN = 'ISLOGGEDIN'
export const INCREASECART='INCREASECART';
export const DECREASECART='DECREASECART';
export const REMOVECART='REMOVECART'; 
export const ADDTOCART='ADDTOCART'; 
export const CHANGESELECTCART='CHANGESELECTCART'
export const PAYMENTDETAILS='PAYMENTDETAILS'
export const SETISHOME='SETISHOME'
export const UNSETISHOME='UNSETISHOME'
// Action creators

export const productdesc=(data)=>({
    type: PRODUCTDESC,
    data: data
})

export const credentials=(data)=>{
    console.log(data)
    return ({
    type: CREDENTIALS,
    data: data
})}

export const loggedin=(data)=>({
    type: ISLOGGEDIN,
    data: data
})
export const increaseCart=(_id)=>({
    type: INCREASECART,
    _id: _id
})
export const decreaseCart=(_id)=>({
    type: DECREASECART,
    _id: _id
})
export const removeCart=(_id)=>({
    type: REMOVECART,
    _id: _id
})
export const addToCart=(productDetails)=>({
    type: ADDTOCART,
    productDetails
})

export const changeSelectCart=(_id)=>({
    type: CHANGESELECTCART,
    _id: _id
})

export const paymentDetails=(paymentdetailsobject)=>({
    type: PAYMENTDETAILS,
    paymentdetailsobject
})
export const setIsHome=()=>({
    type: SETISHOME
})
export const unsetIsHome=()=>({
    type: UNSETISHOME
})
