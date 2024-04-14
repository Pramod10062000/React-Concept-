import React from 'react';
import './InputTag.css';
const InputTag=React.forwardRef((props,refType)=>{
    return(
        <div>
            Name:<input {...props} ref={refType} />
        </div>
    )
})
export default InputTag;