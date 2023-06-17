import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

function NotesList({notes  , handleAddNote , removeNote}) {
  return (

     
    <div className='notes-list-container'>
      {notes.map( (note) => 
        <Note 
          key={note.id} 
          id={note.id} 
          text={note.text} 
          date={note.date}
          removeNote={removeNote}>
            
          </Note> )}
       <AddNote notes={notes}  handleAddNote={handleAddNote} ></AddNote>
    </div>
  )
}

export default NotesList