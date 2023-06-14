
import { useState } from 'react';
import './App.css';
import NotesList from './components/NotesList';

function App() {

const [note , setNote] = useState('')

const handleOnChange = (e) => {
  e.preventDefault()
  console.log(e.target.value)
}


  return (
    <div className="App">
      <input placeholder='add your note' onChange={handleOnChange}></input>
      <NotesList note={note} setNote={setNote}></NotesList>
    </div>
  );
}

export default App;
