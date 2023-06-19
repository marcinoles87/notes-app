import React, { useState } from 'react'

function AddNote({notes ,handleAddNote}) {
  let [noteText , setNoteText] = useState('');

  const remainingCount = 200

  const handleOnChange = (e) => {
    // e.preventDefault();

    if(remainingCount - e.target.value.length >= 0){
    const valueArea = e.target.value.toUpperCase()
    setNoteText(
      valueArea
    )
  }else{
    alert('no more characters ...')
  }

   
  }

  const handleClick = () => {

    
    if(noteText.length > 0){
    handleAddNote(noteText);
    setNoteText('')
    }else(
      alert('no match note ... pleas add note ...')
    )

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

        <small>{remainingCount-noteText.length} Remaining</small>
        <button className='save' onClick={handleClick}>Save</button>

      </div>
    </div>
  )
}

export default AddNote