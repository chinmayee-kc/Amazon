import React, {useState} from "react";
export const Searchbar = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value); 
    };
    return (
        <div>
            <input 
                type="text"
                placeholder="Search here..."
                className="search"
                value={query}
                onChange={handleInputChange}
            />
        </div>
    );
}





