 import './Button.css'
 const Button=(props)=>{
    return(
        <button onClick={props.onClickHandler} className="Btn">{props.children}</button>
    )
 }
 export default Button