import { useState } from 'react';
import './App.css';
import ImageList from './ImageList/ImageList';
import Modal from './Modal/Modal';
function App() {
  const [getFlag, setFlag] = useState(false);

  const [getIndex, setIndex] = useState(0);

  const onClickHandler = () => {
    setFlag(!getFlag);

  }

  const onChangeIndexHandler = (event) => {
    setIndex(event.target.value);

  }
  return (


    <div>
      <ImageList id={getIndex} onClickHandler={onClickHandler} />
      {getFlag && <Modal onChangeIndexHandler={onChangeIndexHandler} />}
    </div>
  );
}

export default App;
