import { useState } from 'react';
import './App.css';
import Form from './Form';
import List from './List';

function App() {
  const[glist,gset]=useState({
    mobile: "No name",
        price: "20000",
        discount: "10%"
  });

  const setUpdateHandler=(input)=>{
    gset(input);
}
  return (
    <div>
      <Form onGetHandler={setUpdateHandler}/>
      <div>
        <List mobile={glist.mobile} price={glist.price} discount={glist.discount} />
      </div>
    </div>
  );
}
export default App;
