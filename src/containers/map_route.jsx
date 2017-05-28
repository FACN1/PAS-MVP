import React from 'react';

import Header from '../components/header.jsx';
import TextBox from '../components/text_box.jsx';
import Map from '../components/map.jsx';
import Footer from '../components/footer.jsx';

const MapRoute = () =>
  (
    <div>
      <Header />
      <TextBox />
      <Map />
      <Footer />
    </div>
  );

export default MapRoute;
