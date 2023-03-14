import React, { Component } from 'react';

class SearchInput extends Component {
  render() {
    return (
      <div className="search-input__container">
        <input type="text" className="search__input" placeholder="Enter text" />
      </div>
    );
  }
}
export default SearchInput;
