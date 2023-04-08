import React, { SyntheticEvent, useEffect, useState } from 'react';

import SearchInput from '../components/UI/SearchInput/SearchInput';
import CardList from '../components/UI/CardList';
import { APP_TITLE, NOTHING_FOUND } from '../constants/constants';
import { ICardAPI } from '../types/types';
import Spinner from '../components/UI/Spinner/Spinner';

const Home = () => {
  const [cats, setCats] = useState([] as ICardAPI[]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchingData = async () => {
      const ls = localStorage.getItem('searchValue');
      if (ls) {
        const response = await getFlickrCards(ls);
        setCats(await response);
      } else {
        const response = await getFlickrCards('');
        setCats(await response);
      }
    };
    fetchingData();
  }, []);

  const getFlickrCards = async (search: string) => {
    setLoader(true);
    try {
      const url = `https://rickandmortyapi.com/api/character/?name=${search}`;
      const response = await fetch(url);
      if (response.status !== 200) {
        throw { ...(await response.json()) }.error;
      }
      const result = await response.json();
      return result.results;
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  };
  const handleChange = async (e: SyntheticEvent<HTMLInputElement, KeyboardEvent>) => {
    if (e.nativeEvent.key === 'Enter') {
      if (!(e.target instanceof HTMLInputElement)) return;
      const response = await getFlickrCards(e.target.value);
      setCats(await response);
    }
  };

  return (
    <main className="main" data-testid="main">
      {loader && <Spinner />}
      <h1 className="main-title">{APP_TITLE}</h1>
      <SearchInput onChange={handleChange} />
      {cats ? <CardList cards={cats} /> : <div>{NOTHING_FOUND}</div>}
    </main>
  );
};
export default Home;
