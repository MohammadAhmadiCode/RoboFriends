import React from 'react';

const SearchBox = ({SearchField , SearchChange}) => {
    return ( 
        <div  className="pa2">
            <input className="pa3 ba b--green  bg-lightest-blue" type="search" placeholder="Search Robots" onChange={SearchChange}/>
        </div>
     );
}
 
export default SearchBox;