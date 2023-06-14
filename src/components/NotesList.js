import React from 'react'
import Note from './Note'

function NotesList({notes , setNote}) {
  return (

     
    <div className='notes-list-container'>
      {notes.map( (note) => <Note key={note.id} id={note.id} text={note.text} date={note.date}></Note> )}
    </div>
  )
}

export default NotesList