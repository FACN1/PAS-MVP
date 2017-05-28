import React from 'react';

import Header from '../components/header.jsx';
import TextBox from '../components/text_box.jsx';
import Walking from '../components/walking.jsx';
import Footer from '../components/footer.jsx';

const WalkingDirections = () =>
  (
    <div>
      <Header />
      <TextBox />
      <Walking />
      <Footer />
    </div>
  );

export default WalkingDirections;
