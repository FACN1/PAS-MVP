import React, { Component } from 'react';
import axios from 'axios';

import Header from '../components/header.jsx';
import TextBox from '../components/text_box.jsx';
import SearchList from '../components/search_list.jsx';


class SelectGuesthouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'PAS',
      tagLine: 'Park & Sleep',
      db: [],
      currentGuestHouse: {},
    };
    this.currentGuestHouse = this.currentGuestHouse.bind(this);
  }

  currentGuestHouse(guestHouse) {
    const current = this.state.db.filter((GHouse) => {
      if (GHouse.name === guestHouse) {
        return GHouse;
      }
      return current;
    });
    this.setState({
      currentGuestHouse: current,
    });
  }

  componentDidMount() {
    axios.get('/api')
    .then((res) => {
      // console.log(res.data);
      this.setState({ db: res.data });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <TextBox />
        <SearchList
          db={this.state.db}
          updateCurrent={this.currentGuestHouse} />
      </div>
    );
  }
}

export default SelectGuesthouse;
