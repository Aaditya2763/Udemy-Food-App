 import React from "react"
 import classes from '../UI/card.module.css'
 const card=props=>{

    return <div className={classes.card}>{props.children}</div>

 }
 export default card