import React,{ Fragment } from 'react'
import mealImg from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import classes from './header.module.css'


const Header=props=>{
return <Fragment>
    <header className={classes.header}>
<h1>IndianMeals</h1>
<HeaderCartButton  onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
<img src={mealImg} alt='A table full of delicious food' />
    </div>

</Fragment>
}

export default Header
