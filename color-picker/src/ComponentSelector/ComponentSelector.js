

import './ComponentSelector.css';
const ComponentSelector = (props)=>{
    return(
   
        <div onClick={()=>props.onSelectHandler(props.color)}  style={{backgroundColor:props.color}}  className='ComponentSelector'>
            <p>{props.color}</p>
        </div>
        //call back function = function calling another function.call back function calling another function with an argument
    )
}
export default ComponentSelector;