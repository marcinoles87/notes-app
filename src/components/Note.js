import React from 'react'
import { MdDeleteForever} from 'react-icons/md'

function Note() {
  return (
    <div className='note-container'>
        <span>Hello ! this is note</span>
        <div className='note-footer'>
            <small>13/04/2023</small>
            <MdDeleteForever></MdDeleteForever>
        </div>
    </div>
  )
}

export default Note