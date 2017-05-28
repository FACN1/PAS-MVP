import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () =>
  (
    <form>
    <input type="text" />
    <Link to="/method"><input type="submit" /></Link>
    </form>
  );

export default SearchBar;
