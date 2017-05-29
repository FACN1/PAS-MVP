import React, { Component } from 'react';
import axios from 'axios';

import Header from '../components/header.jsx';
import TextBox from '../components/text_box.jsx';
import SearchBar from '../components/search_bar.jsx';


class SelectGuesthouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      db: {},
    };
  }

  componentDidMount() {
    axios.get('/api')
    .then((res) => {
      this.setState({ db: res.data });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <TextBox />
        <SearchBar guesthouses={this.state.db} />
      </div>
    );
  }
}

export default SelectGuesthouse;
