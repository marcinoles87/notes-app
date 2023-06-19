
import { useState } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import Search from './components/Search';


function App() {

const [searchText , setSearchText] = useState('')
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


const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id : Math.random(),
    text : text ,
    date : date.toLocaleDateString() ,

  }

  const newNotes = [...notes , newNote]
  setNote(newNotes)
  setSearchText('')

}

const removeNote = (id) => {
  console.log(id)
  const newNotes = notes.filter( (note) => note.id !== id)
  setNote(newNotes)
  
}

  return (
    <div className="App">
      <Search setSearchText={setSearchText} ></Search>
      <button className='btn-toogle'>Toogle</button>

      <NotesList 

            notes={notes.filter( (note) => note.text.includes(searchText))}  
            handleAddNote={addNote} 
            removeNote={removeNote}>
      </NotesList>
    </div>
  );
}

export default App;
