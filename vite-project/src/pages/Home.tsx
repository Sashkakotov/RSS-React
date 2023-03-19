import React, { Component } from 'react';

import SearchInput from '../components/UI/input/SearchInput';
import CardList from '../components/UI/CardList';
import { APP_TITLE } from '../constants/constants';
import { getCats } from '../API/getData';

class Home extends Component {
  state = {
    cats: [],
  };

  async componentDidMount() {
    const result = await getCats();
    if (result) {
      this.setState({ cats: result.cats });
    }
  }

  render() {
    return (
      <main className="main" data-testid="main">
        <h1 className="main-title">{APP_TITLE}</h1>
        <SearchInput />
        <CardList cats={this.state.cats} />
      </main>
    );
  }
}
export default Home;
