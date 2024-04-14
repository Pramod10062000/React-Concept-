import React from 'react';
import { useSelector } from 'react-redux';
 export default function App() {
  const count=useSelector((state)=>state.counter.count);
  return (
    <div className="App">
      <h1>The count is : {count}</h1>
    </div>
  );
}


