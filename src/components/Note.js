import React from 'react'
import { MdDeleteForever} from 'react-icons/md'

function Note( {id , text , date}) {
  return (
    <div className='note-container' key={id}>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever className='delete-icon'></MdDeleteForever>
        </div>
    </div>
  )
}

export default Note