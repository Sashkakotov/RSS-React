import React, { SyntheticEvent, useState } from 'react';

import SearchInput from '../components/UI/SearchInput/SearchInput';
import CardList from '../components/UI/CardList';
import { APP_TITLE, NOTHING_FOUND } from '../constants/constants';
import Spinner from '../components/UI/Spinner/Spinner';
import { useAppSelector } from '../hooks/redux';
import { cardsAPI } from '../services/cardsServices';

const Home = () => {
  const { searchInputValue } = useAppSelector((state) => state.cardReducer);
  const [searchValue, setSearchValue] = useState(searchInputValue);

  const { data: cards, error, isLoading } = cardsAPI.useFetchAllCardsQuery(searchValue);

  const handleChange = async (e: SyntheticEvent<HTMLInputElement, KeyboardEvent>) => {
    if (e.nativeEvent.key === 'Enter') {
      if (!(e.target instanceof HTMLInputElement)) return;
      setSearchValue(e.target.value);
    }
  };

  return (
    <main className="main" data-testid="main">
      <h1 className="main-title">{APP_TITLE}</h1>
      <SearchInput onChange={handleChange} />
      {isLoading && <Spinner />}
      {error === undefined && cards !== undefined ? (
        <CardList cards={cards.results} />
      ) : (
        <>{NOTHING_FOUND}</>
      )}
    </main>
  );
};
export default Home;
