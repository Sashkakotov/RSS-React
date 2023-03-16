import React, { Component } from 'react';
import SearchInput from '../components/UI/input/SearchInput';
import CardList from '../components/UI/CardList';

class Home extends Component {
  render() {
    return (
      <main className="main" data-testid="main">
        <SearchInput />
        <CardList />
      </main>
    );
  }
}
export default Home;
