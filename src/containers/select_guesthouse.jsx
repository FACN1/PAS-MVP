import React, { Component } from 'react';

import Header from '../components/header.jsx';
import TextBox from '../components/text_box.jsx';
import SearchList from '../components/search_list.jsx';

// Messing aroung
import Store from '../state/store';
import Actions from '../state/actions';


class SelectGuesthouse extends Component {
  constructor(props) {
    super(props);

    this.currentGuestHouse = this.currentGuestHouse.bind(this);
  }

  currentGuestHouse(guestHouse) {
    const current = Store.guestHouseList.filter((GHouse) => {
      if (GHouse.name === guestHouse) {
        return GHouse;
      }
      return current;
    });
    Store.currentGuestHouse = current;
    Store.title = current[0].name;
    Store.tagLine = current[0].address;
    // Don't need
    this.forceUpdate();
  }

  componentDidMount() {
    Actions.get()
      .then(() => {
        this.forceUpdate();
      });
  }

  render() {
    return (
      <div>
        <Header />
        <TextBox />
        <SearchList
          db={Store.guestHouseList}
          updateCurrent={this.currentGuestHouse} />
      </div>
    );
  }
}

export default SelectGuesthouse;
