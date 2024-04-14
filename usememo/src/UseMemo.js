 import { useMemo, useState } from 'react';
import './Counter.css';
 const UseMemo=()=>{
    const [getCount,setCount]=useState(0);
    const onclickHandler=()=>{
        setCount(getCount+1);
    }
    const exe=(num)=>{
        let n = num+1000000;
        for(let i=0;i<n;i++){
            const k =i*i;

        }
        return num;
    }
    // const calculation=exe(getCount);
    const calculation=useMemo(()=>{
       return exe(getCount);
         
    },[getCount])

    return(<>
        <div className="Counter" >
            <h1>{getCount}</h1>
            <button onClick={onclickHandler}>Increment</button>
        </div>
        <br></br>
        <div className='Counter'>
            {calculation}
        </div>
        </>
    );

 }
 export default UseMemo