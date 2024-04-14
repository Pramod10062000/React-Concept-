import { useState } from 'react';
import './App.css';
import ColorSelector from './ColorSelector/ColorSelector';
import ComponentSelector from './ComponentSelector/ComponentSelector';

function App() {
  const [nextBackground, setnextBackground] = useState({ background: '' })
  const [getSelection, setSelection] = useState([{ id: 0, background: '' }, { id: 1, background: '' }, { id: 2, background: '' }])

  const onSelectHandler = (input) => {
    setnextBackground({ background: input });
  }


  const applyColor = (index) => {
    let list = getSelection[index];
    list.background = nextBackground.background;
    setSelection([...getSelection, list]);
  }




  return (
    <div className="App">
      <ComponentSelector onSelectHandler={onSelectHandler} color="red" />
      <ComponentSelector onSelectHandler={onSelectHandler} color="orange" />
      <ComponentSelector onSelectHandler={onSelectHandler} color="blue" />
      <div className='App'>

        <ColorSelector applyColor={applyColor} id="0" background={getSelection[0].background} />
        <ColorSelector applyColor={applyColor} id="1" background={getSelection[1].background} />
        <ColorSelector applyColor={applyColor} id="2" background={getSelection[2].background} />

      </div>


    </div>
  );
}

export default App;
