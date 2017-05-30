import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  logChange(val) {
    console.log(val);
  }


  render() {
    const names = Object.keys(this.props.guesthouses);
    const options = names.map((currentValue, index) => {
       {
         value: index,
         label: currentValue,
       };
    });
    return (
      <div>
        <Select
        options={options}
        onChange={this.logChange}
        />
        <Link to="/method"><input type="submit" /></Link>
      </div>
    );
  }
}

export default SearchBar;
