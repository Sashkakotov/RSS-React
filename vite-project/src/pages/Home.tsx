import React, { useEffect, useState } from 'react';

import SearchInput from '../components/UI/SearchInput/SearchInput';
import CardList from '../components/UI/CardList';
import { APP_TITLE } from '../constants/constants';
import getCats from '../API/getData';
import { ICard } from 'types/types';

const Home = () => {
  const [cats, setCats] = useState([] as ICard[]);

  useEffect(() => {
    const result = getCats();
    if (result) {
      setCats(result);
    }
  }, []);

  return (
    <main className="main" data-testid="main">
      <h1 className="main-title">{APP_TITLE}</h1>
      <SearchInput />
      <CardList cats={cats} />
    </main>
  );
};
export default Home;
