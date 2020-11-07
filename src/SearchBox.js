import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div className='pa2'>
        <input 
            className='tc pa3 ma2 bg-light-green' 
            type='search' 
            placeholder='Search Robots'
            onChange={searchChange}>
        </input>
        </div>
    )
}
export default SearchBox;