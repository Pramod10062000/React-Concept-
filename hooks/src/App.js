import { useEffect, useState } from 'react';
import './App.css';
import List from './List';
import Reducer from './Reducer';

const App = () => {
  const [getCount, setCount] = useState(0);

  const [getFlag, setFlag] = useState(true);
  //similar to class component method commponentDidMount()
  //because of empty array bracket it is called only once
  useEffect(() => {
    alert("SetCount executed remove strict mode from index.js")
    setCount(18);
  }, []);

  // this method will be called on each and every change in state and there is not empty array bracket//Change in state this method will be called
  //this kind of functionality can be used in flipkart or cart to fix max no of items
  // useEffect(()=>{
  //  alert("state changed")
  //     if(getCount>25 || getCount<0){
  //       setCount(18);
  //     }
  // });
  // to get a  method similar to the above but it should get called on change in a a particular state change we should go with ["statechangevar"] 
  // this below method will be executed on when there is change in count state and not when flag state is changed which was the case in the previous method 
  useEffect(() => {
    alert("state changed")
    if (getCount > 25 || getCount < 0) {
      setCount(18);
    }
  }, [getCount]);
  const onIncHandler = () => {
    setCount(getCount + 1);

  }
  const onDecHandler = () => {
    setCount(getCount - 1);
  }
  const onShow = () => {
    setFlag(!getFlag);

  }



  return (
    <div className='container'>

      <div>
        <input type='text' readOnly value={getCount} />
      </div>
      <div>
        <button onClick={onIncHandler}>Increment</button>
        <button onClick={onDecHandler}>Decrement</button>
        <button onClick={onShow}>Show/Hide</button>
      </div>
      {/* whenever we remove this component the useEffect within the component will be called */}
      {getFlag && <List />}
      <div>
        <Reducer/>
      </div>
    </div>


  );
}
export default App;
