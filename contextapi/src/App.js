import React, { useState } from 'react';
import './App.css';
import Container from './Container';
//Example of Hook 
//Asked in interviews
//To get rid of Props Drilling we use this
//we have implemented the concept of drilling of props that is passing props from parent to child 
//like From app.js to Container.js to Table.js to Button.js
//Time taking process
//Alternative we can use is UserContext 
export const UserContext = React.createContext();

function App() {
  const [getCounter, setConter] = useState(25);
  const onClickHandler = () => {
    setConter(getCounter + 1);

  }
  return (
    <UserContext.Provider value={getCounter}>
      <div className="App">
        <input type="number" value={getCounter} />
        <button onClick={onClickHandler}>Submit</button>
        <Container counter={getCounter} />
      </div>
    </UserContext.Provider>

  );
}

export default App;
