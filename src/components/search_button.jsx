import React from 'react';
import { Link } from 'react-router-dom';

const SearchButton = (props) => {
  const handle = () => {
    props.clickHandler(props.currentGHouse);
  };

  return (
    <Link to='/method'><button onClick={handle}>{props.currentGHouse}</button></Link>
  );
};
export default SearchButton;
