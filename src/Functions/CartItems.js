export function getCartItems() {

  const storedCartItems = localStorage.getItem('cartItems');
  if (!storedCartItems) {
    return [];
  }
  return JSON.parse(storedCartItems);
}

export function increaseCartItems(itemId) {

  const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
  if (!storedCartItems) {
    return [];
  }
  const itemToUpdate = storedCartItems.find(item => item._id === itemId);
  if (itemToUpdate && itemToUpdate.quantity >= 1) {
    itemToUpdate.quantity += 1;
  }
  localStorage.setItem('cartItems', JSON.stringify(storedCartItems));

}

export function decreaseCartItems(itemId) {

  const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
  if (!storedCartItems) {
    return [];
  }
  const itemToUpdate = storedCartItems.find(item => item._id === itemId);
  if (itemToUpdate && itemToUpdate.quantity === 1) {
    removeCartItems(itemId);
    return;
  }
  itemToUpdate.quantity -= 1;
  localStorage.setItem('cartItems', JSON.stringify(storedCartItems));
}
export function removeCartItems(itemId) {

  const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
  if (!storedCartItems) {
    return [];
  }
  let cartItems = storedCartItems.filter(item => item._id !== itemId);

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

export function addCartItems(productDetails) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const existingItem = cartItems.find(item => item._id === productDetails._id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ ...productDetails, quantity: 1, selected: true });
  }
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

export function changeSelectCartItems(itemId) {


  const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
  if (!storedCartItems) {
    return [];
  }
  const itemToUpdate = storedCartItems.find(item => item._id === itemId);
  if (itemToUpdate && itemToUpdate.quantity >= 1) {
    itemToUpdate.selected = !itemToUpdate.selected;
  }
  localStorage.setItem('cartItems', JSON.stringify(storedCartItems));
}

export function priceCartItems(){
   const cartItems=getCartItems()
   return cartItems.reduce((total,item)=>{
     if(item.selected===true)
     {
         return total+(item.Price*item.quantity)
     }
     else{
         return total+0;
     }
   },0)
} 

export function numberCartItems(){
  const cartItems=getCartItems()
  return cartItems.reduce((total,item)=>{
    if(item.selected===true)
    {
        return total+1
    }
    else{
        return total+0;
    }
  },0)
} 

export function selectedItemList(){
  const cartItems=getCartItems()
  return cartItems.filter((item)=>{
    return item.selected===true
    })
}


