import {getCartItems,priceCartItems,numberCartItems} from "../Functions/CartItems";
let credentialdata=JSON.parse(localStorage.getItem("credential"))
credentialdata=credentialdata===undefined && {email:"",name:"",token:""}
   

const initialvalue = {
    productDetails: {},
    credentials:{email:credentialdata.email,name:credentialdata.name,token:credentialdata.token},
    isLoggedin:credentialdata.isLoggedin,
    cartItems: getCartItems(),
    cartprice:priceCartItems(),
    numbercart:numberCartItems(),
    paymentPrice:0,
    paymentItems:[],
    isHome:true
};
export default initialvalue;