import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spiner';
import './Login.css';
const Login = () => {
    const [getflagSpinner,setflagSpinner]=useState(false);
    const [getForm,setForm]=useState({
        email:'',
        password:''
    });


    const onChangeHandler=(event)=>{
        setForm({
            ...getForm, [event.target.name]:event.target.value
        })
    }
    //we use useNavigate for internal routing
    //For redirectin the user to products page after successfull login and validation
    const navigation = useNavigate();
    const onSubmitHandler = (event) => {
        let id = 1006;
        event.preventDefault();
        alert("VALIDATION");
        setflagSpinner(true);
        setTimeout(()=>{
            setflagSpinner(false);
            navigation(`/Product/${id}?email=${getForm.email}&password=${getForm.password}`);
        },3000);
        

    }
    return (
        <div className='container'>
            {getflagSpinner && <Spinner/>}
            <div className='row'>
                <div className='col-4'>
                </div>
                <div className='col-4'>
                    <h3>Please Login User</h3>
                    <form>
                        <div class="form-group">
                            <label >Email address</label>
                            <input onChange={onChangeHandler}  type="email" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label >Password</label>
                            <input  onChange={onChangeHandler}  type="password" class="form-control" name="password" placeholder="Password" />
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" >Check me out</label>
                        </div>
                        <button onClick={onSubmitHandler} type="submit" class="btn btn-primary">Login</button>
                    </form>

                </div>
                <div className='col-4'>
                </div>
            </div>
        </div>

    );


}
export default Login


//import React from 'react'
//Lazy Loading : Doesnot load the component at start
//whenever user clicks the associated component it will be rendererd
//const Product=React.lazy(()=>import('./Product/Product'));
//we can use lazy loading with routing only without routing lazy loading not possible
//use : to improve performance of the application

//Application performance improvement/performance optimization
//1.Lazy loading
//2.useCallBack//prevents component from re rendering
//3.useMemo
//4.Drilling of props to avoid(UseContext) contextapi
//5.UI reusable component ex:button,spinner etc 
//Batch Schduling - one time Rerendering of component
//all state code is async
// if we want to perform certain operation after change in state variable dont write the same after the changing the state 
//we cant say when the code will be executed for perfoming certian operation after change in state we have to use UseEffect

//const[setFlag,getFlag]=useSttae(false);
// cons onCLickHandler=()=>{
//setFlag(true)
// } 

//useEffect(()=>{
    //console.log(will be executed when there is change is setFlag)
// },[setflag])
//if any state changes happen then entire functional component will re-render
//state component wont we reinitialized again