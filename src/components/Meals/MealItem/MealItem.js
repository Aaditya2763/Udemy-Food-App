import React from "react";
import { useContext } from "react";
import classes from "./mealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/CartContext";


const MealItem = (props) => {

  const carCtx=useContext(CartContext);
  //Ist way to get data
  //const price = `$${props.meal.price.toFixed(2)}`;

  //2nd way to get data
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler=amount=>{
 carCtx.addItem({
   id:props.id,
   name:props.name,
   amount:amount,
   price:props.price
 });

  };

  return (
    //Ist way to get Data from props
    // <li>
    //   <div className={classes.meal}>
    //     <h3>{props.meal.name}</h3>
    //   </div>
    //   <div className={classes.description}>{props.meal.description}</div>
    //   <div className={classes.price}>{price}</div>
    // </li>

    //2nd way to get data by using props
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>

        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MealItem;
