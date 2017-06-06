import React from 'react';

const SearchButton = (props) => {
  const handle = () => {
    props.clickHandler(props.currentGHouse);
  };

  return (
    <button onClick={handle}>{props.currentGHouse}</button>
  );
};
export default SearchButton;
