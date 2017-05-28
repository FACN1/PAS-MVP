import React from 'react';
import { Link } from 'react-router-dom';

const ButtonContainer = () =>
  (
    <div>
      <Link to="/map"><img src="#" alt="car picture"/></Link>
      <Link to="/map"><img src="#" alt="bus picture"/></Link>
      <Link to="/map"><img src="#" alt="taxi picture"/></Link>
    </div>
  );

export default ButtonContainer;
