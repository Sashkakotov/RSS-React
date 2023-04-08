import React, { SyntheticEvent, useEffect } from 'react';

import SearchInput from '../components/UI/SearchInput/SearchInput';
import CardList from '../components/UI/CardList';
import { APP_TITLE, NOTHING_FOUND } from '../constants/constants';
import Spinner from '../components/UI/Spinner/Spinner';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import fetchCards from '../store/reducers/ActionCreator';

const Home = () => {
  const dispatch = useAppDispatch();
  const { cards, isLoading, error } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(fetchCards(''));
  }, [dispatch]);

  const handleChange = async (e: SyntheticEvent<HTMLInputElement, KeyboardEvent>) => {
    if (e.nativeEvent.key === 'Enter') {
      if (!(e.target instanceof HTMLInputElement)) return;
      dispatch(fetchCards(e.target.value));
    }
  };

  return (
    <main className="main" data-testid="main">
      {isLoading && <Spinner />}
      <h1 className="main-title">{APP_TITLE}</h1>
      <SearchInput onChange={handleChange} />
      {error ? <>{NOTHING_FOUND}</> : <CardList cards={cards} />}
    </main>
  );
};
export default Home;
