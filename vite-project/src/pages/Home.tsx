import React, { SyntheticEvent, useEffect, useState } from 'react';

import SearchInput from '../components/UI/SearchInput/SearchInput';
import CardList from '../components/UI/CardList';
import { APP_TITLE } from '../constants/constants';
import getCats from '../API/getData';
import { flickrResponse, ICard } from '../types/types';
import Spinner from '../components/UI/Spinner/Spinner';

const Home = () => {
  const [cats, setCats] = useState([] as flickrResponse[]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchingData = async () => {
      const ls = localStorage.getItem('searchValue');
      if (ls) {
        const response = await getFlickrCards(ls);
        setCats(await response);
      }
    };
    fetchingData();
  }, []);

  const getFlickrCards = async (search: string) => {
    setLoader(true);
    try {
      const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e1ef2eb52dead24effea7dc5ec0fd405&text=${search}&tags=cats&per_page=10&page=&format=json&nojsoncallback=1`;
      const response = await fetch(url);
      const result = await response.json();
      return result.photos.photo;
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  };
  const handleChange = async (e: SyntheticEvent<HTMLInputElement, KeyboardEvent>) => {
    console.log(e.nativeEvent);

    if (e.nativeEvent.key === 'Enter') {
      const response = await getFlickrCards((e.target as HTMLInputElement).value);
      setCats(await response);
      console.log('sadasdasd');
    }
  };

  return (
    <main className="main" data-testid="main">
      {loader && <Spinner />}
      <h1 className="main-title">{APP_TITLE}</h1>
      <SearchInput onChange={handleChange} />
      {cats.length ? <CardList cards={cats} /> : <div>Please use search</div>}
      {/* {cats ? (
        <img
          className="card-photo"
          src={`https://live.staticflickr.com/${cats.server}/${cats.id}_${cats.secret}.jpg`}
          alt="img"
        />
      ) : (
        ''
      )} */}
    </main>
  );
};
export default Home;
