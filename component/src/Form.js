import { useState } from "react";
const Form = (props) => {

    const [obj, setList] = useState({
        mobile: "No name",
        price: "20000",
        discount: "10%"
    })

    const onchangeHandler = (event) => {
        setList({ ...obj, [event.target.name]:event.target.value});
    }

 
    const onsubmitHandler=(event)=>{
        props.onGetHandler(obj);

    }
    return (
        <div>
            <h1> Form </h1>
            enter mobile:<input type="text" name="mobile" id="mob" onChange={onchangeHandler}></input>
            enter price:<input type="text" name="price" id="price" onChange={onchangeHandler}></input>
            enter discount:<input type="text" name="discount" id="discount" onChange={onchangeHandler}></input>
            <br/>
            <br/>
            <button onClick={onsubmitHandler}>Submit</button>
        </div>
    );
}

export default Form