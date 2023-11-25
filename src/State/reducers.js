import { 
      PRODUCTDESC, 
      CREDENTIALS, 
      ISLOGGEDIN, 
      INCREASECART, 
      DECREASECART, 
      REMOVECART ,
      ADDTOCART,
      CHANGESELECTCART, 
      PAYMENTDETAILS,
      SETISHOME,
      UNSETISHOME
      } from './actions';
import initialvalue from './initialstate';
import {getCartItems,increaseCartItems,decreaseCartItems,removeCartItems, addCartItems,changeSelectCartItems,priceCartItems,numberCartItems} from '../Functions/CartItems';


const counterReducer = (state = initialvalue, action) => {
      switch (action.type) {
            case PRODUCTDESC:
                  return { ...state, productDetails: action.data };
            case CREDENTIALS:
                  return { ...state, credentials: action.data, isLoggedin: !state.isLoggedin };
            case ISLOGGEDIN:
                  return { ...state, isLoggedin: action.data }
            case INCREASECART:
                  increaseCartItems(action._id)
                  return { ...state, cartItems: getCartItems() ,cartprice:priceCartItems(),numbercart:numberCartItems()}
            case DECREASECART:
                  decreaseCartItems(action._id)
                  return { ...state, cartItems: getCartItems() ,cartprice:priceCartItems(),numbercart:numberCartItems() }
            case REMOVECART:
                  removeCartItems(action._id)
                  return { ...state, cartItems: getCartItems() ,cartprice:priceCartItems(),numbercart:numberCartItems() }
            case ADDTOCART:    
                 addCartItems(action.productDetails)
                 return { ...state, cartItems: getCartItems() ,cartprice:priceCartItems(),numbercart:numberCartItems() }  
            case CHANGESELECTCART:    
                 changeSelectCartItems(action._id)
                 return { ...state, cartItems: getCartItems(),cartprice:priceCartItems(),numbercart:numberCartItems()}                  
            case  PAYMENTDETAILS:    
                 return { ...state, cartItems: getCartItems(),cartprice:priceCartItems(),numbercart:numberCartItems(),paymentPrice:action.paymentdetailsobject.paymentPrice,paymentItems:action.paymentdetailsobject.paymentItems}    
            case SETISHOME:     
                 return { ...state,isHome:true}
            case UNSETISHOME:     
                 return { ...state,isHome:false}            
            default:
                  return state;
      }
};

export default counterReducer;
