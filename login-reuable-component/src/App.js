import { useRef } from 'react';
import './App.css';
import Button from './Button/Button';
import InputTag from './Input/InputTag';
import './Section/Section';
import Section from './Section/Section';

function App() {
  const refType = useRef(null);
  const onClickHandler = () => {
    alert("clicked")

    console.log(refType.current.value);

    console.log(refType.current.id);
    console.log(refType.current.name);
  }
  return (

    <div className="App">
      <Section>
        <h3>Login</h3>
        <div>
        <InputTag type="text" name="Uname" id="name" ref={refType}/>
        </div>

        <div className="Password">password:<input type="password" /></div>
        <div>

          <Button onClickHandler={onClickHandler}>Submit</Button>

        </div>

      </Section>
    </div>
  );
}

export default App;
