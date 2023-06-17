
import { useState } from 'react';
import './App.css';
import NotesList from './components/NotesList';


function App() {

const [notes , setNote] = useState([
  {
    id: 1 ,
    text : "first text" ,
    date : "15/06/2023"
  
  },

  {
    id: 2 ,
    text : "second text" ,
    date : "15/06/2023"
  
  },

  {
    id: 3 ,
    text : "third text" ,
    date : "15/06/2023"
  
  }
])

const handleOnChange = (e) => {
  e.preventDefault()

  const inputValue = e.target.value.toUpperCase()

    console.log(inputValue)
}

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id : Math.random(),
    text : text ,
    date : date.toLocaleDateString() ,

  }

  const newNotes = [...notes , newNote]
  setNote(newNotes)

}

const removeNote = (id) => {
  notes.filter( (note) => note.id !== id)
}

  return (
    <div className="App">
      <input placeholder='add your note' onChange={handleOnChange}></input>
      <NotesList notes={notes}  handleAddNote={addNote} removeNote={removeNote}></NotesList>
    </div>
  );
}

export default App;
