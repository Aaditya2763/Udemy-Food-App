
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import classes from './headerCartButton.module.css';
import CartContext from "../../store/CartContext";


// to use  useContext we have to import useContext f rom react and CartContext from ../../store/CartContext.
//to use the data of cart context we need to call the closest component to cart context i.e CartProvider\
//by using the useContext here the header cart button will be reevaluated  by react whenever  the context Changes

const HeaderCartButton=(props)=>{
 const cartCtx= useContext(CartContext);


  const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
      return curNumber+item.amount
  },0)


    return (
        <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
    )

}

export default HeaderCartButton;