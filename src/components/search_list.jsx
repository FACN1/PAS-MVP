import React from 'react';

const SearchList = (props) => {
  const handleClick = (guestHouse) => {
    props.updateCurrent(guestHouse);
  };
  console.log(props);

  return (
    <div>
      {props.db.map((guestHouses) => {
        const boundItemClick = handleClick.bind(this, guestHouses.name);
        return (
          <button
            key={guestHouses.name}
            onClick={boundItemClick}>
              {guestHouses.name}
          </button>
        );
      })}
    </div>
  );
};

export default SearchList;
