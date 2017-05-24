/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import tape from 'tape';
import { shallow } from 'enzyme';

import Counter from '../src/components/counter.jsx';
import App from '../src/app.jsx';

tape('Check tape is working', (t) => {
  t.pass('a message');
  t.end();
});

tape('Check that a button is rendered', (t) => {
  const wrapper = shallow(<Counter />);

  t.equal(wrapper.exists(<button/>), true);
  t.end();
});

tape('Check that app renders counter', (t) => {
  const wrapper = shallow(<App />);

  t.equal(wrapper.exists(<Counter />), true);
  t.end();
});
