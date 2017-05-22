import React from 'react';
import { render } from 'react-dom';
import Counter from './components/counter';

document.addEventListener('DOMContentLoaded', () => {
  render(
    React.createElement(Counter),
    document.getElementById('root')
  );
});
