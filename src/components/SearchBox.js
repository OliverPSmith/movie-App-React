import React from 'react';

const SearchBox = (props) => {
  return (
    <div>
        <input 
            type="text"
            placeholder='Search movies...'
            value={props.value}
            onChange={(e) => props.setSearchValue(e.target.value)}
        />
    </div>
  )
}

export default SearchBox;