import { useState } from 'react';
import './App.css';
import List from './List';


function App() {
  const [obj, setList] = useState(
    {
      name:'No name',
      price:0,
      Discount: 0
    }
  );

  function onChangeHandler(event) {
  
    setList({...obj,[event.target.name]:event.target.value});
   // setList({ ...obj, [event.target.name]:event.target.value })
  }
  
  function onClickHandler(event) {
    alert("Submitted");
  }
  return (
    <div>
      <form>
        Enter name:<input type="text" name="name" onChange={onChangeHandler} id="name"></input>
        <br /><br />
        Enter Price:<input type="text" name="price" onChange={onChangeHandler} id="price"></input>
        <br /><br />
        Enter Discount:<input type="text" name="Discount" onChange={onChangeHandler} id="Discount"></input>
        <br /><br />


        <button onClick={onClickHandler}>Submit</button>
      </form>

      <div className="App">
        <List mobile={obj.name} price={obj.price} Discount={obj.Discount} />
        <List mobile="Apple Iphone 12" price="59999" Discount="5%" />
        <List mobile="Apple Iphone 13" price="69999" Discount="20%" />
        <List mobile="Apple Iphone 14" price="79999" Discount="1%" />
      </div>
    </div>
  );
}

export default App;
