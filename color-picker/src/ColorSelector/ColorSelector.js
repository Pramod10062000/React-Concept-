

import './ColorSelector.css';
const ColorSelector = (props) => {
    return (
        <div  onClick={()=>props.applyColor(props.id)} style={{backgroundColor:props.background}} className='ColorSelector'>
            
        </div>

    )
}
export default ColorSelector;