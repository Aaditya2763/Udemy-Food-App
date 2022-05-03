import CartContext from "./CartContext";
import { useReducer } from "react";
import React from "react";



//we are useing here useReducer for adding/removing items from cart becuse this process contains complex logic , we can also use useState


//we have created  these two function outside the componentbecause they don't need any data from the component but they are passed inside the component by useReducer hook
const defaultCartState={
  items:[], 
  totalAmount:0
}


//state conatains the previous array item details and action contains the passed item details
const cartReducer=(state,action)=>{

  if(action.type==="Add"){
    //array push method push the new element in the exixting array
    //But array concat(method)provide a new array add the element in the array;
    const updatedItems =state.items.concat(action.item);
    const updatedTotalAmount =state.totalAmount +action.item.price*action.item.amount;
    return{
      items:updatedItems,
      totalAmount:updatedTotalAmount
    };
  }
return defaultCartState;
}




//CartProvider Is used to access CartContext

const CartProvider = (props) => {
  
//we know useReducer gives two array so to store this we have created cartState,dispatchCartAction

const [cartState,dispatchCartAction]= useReducer(cartReducer,defaultCartState);



  const addItemToCartHandler = (item) => {
// dispatchCartAction parametr can contain a number,string,or object ,we can rename type as anything like identifier etc
 dispatchCartAction({type:'Add',item:item});
  };
  const removeItemFromCartHandler = (id) => {
 dispatchCartAction({type:'Remove',id:id});
  };

//creating a  cartContext object  to store filds  of CartComponent filds like item,totalAmount etc to pass as props  to children

  const cartContext = {
  items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler, 
    removeItem: removeItemFromCartHandler,
  };
//here we have provided CartContext data to CartProvider now we can access CartContext Data like name totalAmount in all the compoments between the cartProvider Components 
//present at the App component 
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
