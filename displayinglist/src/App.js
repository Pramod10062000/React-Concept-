import { useState } from 'react';
import './App.css';
import FormInput from './FormInput';
import List from './List';

function App() {
  const [getText, setText] = useState('');
  const [getList, setList] = useState([]);
  const [getEdit,setEdit]=useState(false);
  const[getIndex,setIndex]=useState(-1);


  const onchangeHandler = (event) => {
    setText(event.target.value);

  }
  const onClickHandler = () => {
    setList([...getList, getText]);
    setText('');
  }

  const onDeleteHandler = (index) => {
    let l = getList;
    l.splice(index, 1);
    setList([...l]);
  }


  const editHandler=(index)=>{
    setEdit(true);
    setText(getList[index]);
    setIndex(index);

  }
  const onEditSubmit=()=>{
    let list=getList;
    list[getIndex]=getText;
    setList([...list]);
    setText('');
    setEdit(false);
  }
  return (
    <div className="App">
      <FormInput value={getText} typeStatus={getEdit} onEditSubmit={onEditSubmit}  onClickHandler={onClickHandler} onchangeHandler={onchangeHandler} />
      {getList && getList.length>0 &&<List editHandler={editHandler}   onDeleteHandler={onDeleteHandler} getList={getList} />}
    </div>
  );
}

export default App;
