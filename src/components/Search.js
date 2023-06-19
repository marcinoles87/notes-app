import React from 'react'

function Search({searchText}) {
  return (
    <div>
        <input placeholder='search your note...' value={searchText} ></input>
    </div>
  )
}

export default Search