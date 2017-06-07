import React from 'react';
import { Link } from 'react-router-dom';

import carSvg from '../../public/images/car.svg';
import busSvg from '../../public/images/bus.svg';
import taxiSvg from '../../public/images/taxi.svg';

const ButtonContainer = () =>
  (
    <div>
      <Link to='/map'>
        <img src={carSvg} />
      </Link>
      <Link to='/map'>
        <img src={busSvg} />
      </Link>
      <Link to='/map'>
        <img src={taxiSvg} />
      </Link>
    </div>
  );

export default ButtonContainer;
