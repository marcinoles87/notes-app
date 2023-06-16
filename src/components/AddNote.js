import React, { useState } from 'react'

function AddNote({notes ,handleAddNote}) {
  let [noteText , setNoteText] = useState('');
  const [count , setCount] = useState(200)

  const handleOnChange = (e) => {
    // e.preventDefault();
    const valueArea = e.target.value.toUpperCase()
    setNoteText(
      valueArea
    )

    const textLength = noteText.length
    console.log(textLength)
    setCount(
      count - textLength
    )
  }

  const handleClick = () => {

    console.log(noteText.length)
    if(noteText.length > 0){
    handleAddNote(noteText);
    setNoteText('')
    }else(
      alert('no match note ... pleas add note ...')
    )
  

  

    // const date = new Date()

    // console.log(notes)

    // setNote(
    // notes.push({id:"",text: noteText , date : date }))
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

        <small>{count} Remaining</small>
        <button className='save' onClick={handleClick}>Save</button>

      </div>
    </div>
  )
}

export default AddNote