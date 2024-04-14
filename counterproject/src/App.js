import React, { useState } from 'react';
import './App.css';
import CounterBtn from './CounterButton/CounterBtn';
import CounterDisplay from './CounterDisplay/CounterDisplay';
import CounterIp from './CounterIp/ConuterIo';

function App() {
  const [getCounter, setCounter] = useState(0);
  const increment = () => {
    setCounter(getCounter+1);
  }

  const decrement = () => {
    
    setCounter(getCounter-1);
  }

  const onChangeHandler=(input)=>{
    setCounter(input);
}

  return (
    <div>

      <CounterIp onChangeHandler={onChangeHandler}/>
      <CounterBtn onIncrementHandler={increment}  onDecrementHandler={decrement}/>
      <CounterDisplay counter={getCounter} />
    </div>
  );
}

export default App;
