import React, { Component } from 'react';

class SearchInput extends Component {
  state = {
    searchInputValue: '',
  };

  componentDidMount() {
    if (localStorage.getItem('searchValue')) {
      this.setState({ searchInputValue: localStorage.getItem('searchValue') });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', String(this.state.searchInputValue));
  }

  handleChange(e: React.SyntheticEvent) {
    this.setState({ searchInputValue: (e.target as HTMLInputElement).value });
  }
  render() {
    return (
      <div className="search-input__container">
        <input
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleChange.bind(this)}
          type="text"
          className="search__input"
          placeholder="Search"
          value={this.state.searchInputValue}
          aria-label="search-input"
        />
      </div>
    );
  }
}
export default SearchInput;
