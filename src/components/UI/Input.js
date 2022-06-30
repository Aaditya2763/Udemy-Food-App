
import React from 'react'
import classes from './input.module.css'
import { forwardRef } from 'react';
//here we are using React.forwardRef to access ref in input component without it we can't use ref in input customized  component
const Input = forwardRef((props,ref)=> {
  return (
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
    
        <input ref={ref}{...props.input} value='1' type='number'/>
    </div>
  )
});

export default Input


//Note line 8 (spread opertator) will ensure that it will contain all key value pair like type=text etc.