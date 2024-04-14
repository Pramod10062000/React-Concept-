import { useState } from 'react';
import './App.css';

function App() {

  const [getFlag,setFlag]=useState(false);
  const onClickHandler=()=>{
    setFlag(true);
  }
  const onClickHandlerDisable=()=>{
    setFlag(false);

  }
  return (
    <div className="App">
          <p>Hello this is conditional rendering example</p>      

      <button onClick={onClickHandler}>Show</button>
      {getFlag && <p>This is conditional rendered based on button clicking</p>}
      <button onClick={onClickHandlerDisable}>Disable</button>
     
    </div>
  );
}

export default App;
