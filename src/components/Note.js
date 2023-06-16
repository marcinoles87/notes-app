import React from 'react'
import { MdDeleteForever} from 'react-icons/md'
import addNote from './AddNote'

function Note( {id , text , date , removeNote}) {
  
  const handleClick = () =>{
    removeNote(id)
  }

  return (
    <div className='note-container' key={id}>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever className='delete-icon' onClick={handleClick}></MdDeleteForever>
        </div>
    </div>
  )
}

export default Note