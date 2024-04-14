import Image from '../Image'
import './ImageList.css'

const ImageList=(props)=>{
    return(
        <div onClick={props.onClickHandler} className="ImageList">
                <img src={Image[props.id].src}/>
        </div>
    )
}
export default ImageList