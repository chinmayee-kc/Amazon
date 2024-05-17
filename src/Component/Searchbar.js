import React, {useState} from "react";
export const Searchbar = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value); 
    };
    return (
        <>
         <div className='nav-search'>
              <select className="search-select hide-for-mobile">
                <option>All</option>
              </select>
              <input 
               type="text"
               placeholder='Search Amazon'
               className="search-input"
               value={query}
               onChange={handleInputChange}
              />
                <div className='search-icon hide-for-mobile'>
                   <img src="icons8-search-25.png" alt="search icon"/>
                </div>
            </div>
           
        </>
    );
}





