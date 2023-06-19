import React from 'react'

function Search({setSearchText}) {

    const handleOnChange = (e) => {
        const val = e.target.value.toUpperCase()
        console.log(val)
        setSearchText(val)
    }
  return (
    <div>
        <input placeholder='search your note...' onChange={handleOnChange} ></input>
    </div>
  )
}

export default Search