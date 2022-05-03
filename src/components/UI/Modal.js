import React,{Fragment} from 'react'
import classes from './modal.module.css'
import ReactDOM  from 'react-dom'



//if we want to close cart on clicking on  backdrop we have to add close handler in both variable backdrop as well as  in side modal backdrop component
const Backdrop=props=>{
     return <div className={classes.backdrop} onClick={props.onClick} />
}

const ModalOverlay=props=>{
    return <div className={classes.modal}>

        <div className={classes.content}>{props.children} </div>
    </div>
}


const portalElement=document.getElementById('overlays')

const Modal = (props) => {

// we can also code like this wthout using portals
//   return (
//     <Fragment>
//     <Backdrop />
//     <ModalOverlay>{props.children}</ModalOverlay>
//     </Fragment>
//   )


// here we are using portals so we have to code like this
  return (
    <Fragment>
{ReactDOM.createPortal(<Backdrop onClick={props.onClick} />,portalElement)}
{ReactDOM.createPortal(
<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </Fragment>
  )
}

export default Modal