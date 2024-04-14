
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = (props) => {

    const element_root = document.getElementById("element_root");
    const [getList, setList] = useState(['image1', 'image2', 'image3']);
    return ReactDOM.createPortal(<div className='modal'>
        <select onChange={props.onChangeIndexHandler}>
            {getList.map((obj, index) => {
                return (<option value={index}  key={index}>{obj}</option>
                )

            })
            }
        </select>
    </div>, element_root);
}
export default Modal
