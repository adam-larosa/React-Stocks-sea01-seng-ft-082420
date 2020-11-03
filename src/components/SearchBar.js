import React from 'react';
const SearchBar = ({ radioButton, dropDown }) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input 
          type="radio" 
          value="Alphabetically" 
          checked={null} 
          onChange={e => radioButton(e)}
        />
        Alphabetically
      </label>
      <label>
        <input 
          type="radio" 
          value="Price" 
          checked={null} 
          onChange={e => radioButton(e)}
        />
        Price
      </label>
      <br/>
      <label>
        <strong>Filter:</strong>
        <select onChange={e => dropDown(e)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}
export default SearchBar;
