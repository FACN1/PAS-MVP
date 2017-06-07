import React from 'react';
import SearchButton from './search_button.jsx';

const SearchList = props =>
  (
    <div>
      {props.db.map(guestHouses =>
        <SearchButton
          key={guestHouses.name}
          clickHandler={props.updateCurrent}
          currentGHouse={guestHouses.name}
        />,
      )}
    </div>
  );

export default SearchList;
