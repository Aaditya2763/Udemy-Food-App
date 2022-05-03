import React from 'react'
import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './cart.module.css'
import CartContext from '../../store/CartContext';
import CartItem from './CartItem'
//import  classes from './CartItem.module.css'




const Cart = (props) =>{
  const carCtx=useContext(CartContext)
 const totalAmount=`${carCtx.totalAmount.toFixed(2)}`;
const hasItems=carCtx.items.length>0;

const cartItemAddHandler=item=>{

}

const cartItemRemoveHandler=id=>{

}

const cartItems=(
  <ul className={classes['cart-items']}>
    { carCtx.items.map((item)=>(
     < CartItem 
     key={item.id}
     name={item.name}
     amount={item.amount}
     price={item.price}
     //bind reconfigure a function for future execution and basically allow you to pre-configure the argument that function will receive when its being executed
    // it  ensure that both the function will receive  id and item as argument
     onRemove={cartItemRemoveHandler.bind(null,item.id)}
     onAdd={cartItemAddHandler.bind(null,item)}
     />
    ))}
</ul>
);

  return (  
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>close</button>
       {hasItems &&<button className={classes.button}>Order</button>}
      </div>


      </Modal>
  )
}

export default Cart