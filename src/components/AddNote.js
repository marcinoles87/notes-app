import React from 'react'

function AddNote() {
  return (
    <div className='note-container new'>
      <textarea
      rows='8'
      cols='10'
      placeholder='type to add a note ...'
      ></textarea>
      <div className='note-footer'>
        <small>200 Remaining</small>
        <button className='save'>Save</button>
      </div>
    </div>
  )
}

export default AddNote