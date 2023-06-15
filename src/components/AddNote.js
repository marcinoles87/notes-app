import React, { useState } from 'react'

function AddNote({notes}) {
  let [noteText , setNoteText] = useState('');

  const handleOnChange = (e) => {
    // e.preventDefault();
    const valueArea = e.target.value.toUpperCase()
    setNoteText(
      valueArea
    )

    console.log(noteText)
  }

  const handleClick = () => {


    console.log(notes)
    notes.push({id:"",text: {noteText} , date : "15/06/2023" })
  }

  return (
    <div className='note-container new'>

      <textarea
          rows='8'
          cols='10'
          placeholder='type to add a note ...'
          value={noteText}
          onChange={handleOnChange}
      ></textarea>

      <div className='note-footer'>

        <small>200 Remaining</small>
        <button className='save' onClick={handleClick}>Save</button>

      </div>
    </div>
  )
}

export default AddNote