import React from 'react';
import './Header.css';

const Header = ({ onCategoryChange }) => {
  return (
    <header>
      <h1>React News Portal</h1>
      <select onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="general">General</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="entertainment">Entertainment</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
      </select>
    </header>
  );
};

export default Header;
