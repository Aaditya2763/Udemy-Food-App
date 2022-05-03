import {useRef,useState} from 'react'
import Input from '../../UI/Input'
import classes from './mealItemForm.module.css'

//we can use useRef directly  as written in MealItemForm but here we are using input custom component so we have to pass ref as props

const MealItemForm = (props) => {
  
  const[amountIsValid,setAmountIsValid]=useState(true);

  const amountInputRef=useRef();
  const submitHandler=(event)=>{
    event.preventDefault();
    const enteredAmount=amountInputRef.current.value;
    //value is always provided in string by the input so we ghave to use + sign to convert into number
    const enteredAmountNumber=+enteredAmount

    if(
      enteredAmount.trim().lengh===0||
      enteredAmountNumber<1||
      enteredAmountNumber>5
    ){
      setAmountIsValid(false);
      return
    }
    
    props.onAddToCart(enteredAmountNumber);

  }

  return (
    //passing submitHandler as props in form component
    <form className={classes.form} onSubmit={submitHandler}>
        <Input 
        ref={amountInputRef}
        label="Amount" input={{
          id:'Amount',
          type:'text',
          min:'1',
          max:'5',
          step:'1',
          dafaultValue:'1'   

        }}
        />
        
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount(1-5).</p>}
    </form>
  )
}

export default MealItemForm