import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/header.jsx';
import TextBox from '../components/text_box.jsx';

class SelectGuesthouse extends Component {
  renderList() {
    return this.props.guesthouses.map(guesthouse => <li
      key={guesthouse.id}>
      {guesthouse.name}
      </li>);
  }
  render() {
    return (
      <div>
        <Header />
        <TextBox />
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    guesthouses: state.guesthouses,
  };
}

export default connect(mapStateToProps)(SelectGuesthouse);
