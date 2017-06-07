import React from 'react';
import Store from '../state/store';

const Header = () => {
  // console.log(props);
  return (
    <div>
      <h1>{Store.title}</h1>
      <img />
      <div className="line-break"></div>
      <h2>{Store.tagLine}</h2>
    </div>
  );
};


export default Header;
