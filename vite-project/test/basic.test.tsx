import React, { SyntheticEvent } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom';

import CardItem from '../src/components/UI/CardItem';

import CardList from '../src/components/UI/CardList';
import SearchInput from '../src/components/UI/SearchInput/SearchInput';
import App from '../src/App';
import Forms from '../src/pages/Forms';
import PopUp from '../src/components/UI/Pop-up/Pop-up';
import CardFromForm from '../src/components/UI/CardForm';
import catsData from '../src/API/data';

const getFlickrCards = async (search: string) => {
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
  }
};
const handleChange = async (e: SyntheticEvent<HTMLInputElement, KeyboardEvent>) => {
  if (e.nativeEvent.key === 'Enter') {
    if (!(e.target instanceof HTMLInputElement)) return;
    const response = await getFlickrCards(e.target.value);
    return response;
  }
};
const cards = await getFlickrCards('');

describe('Cards tests', async () => {
  test('render CardItem component', () => {
    render(<CardItem card={cards[0]} isModal={false} />);
    const cardContainer = screen.getByTestId('card-item__container');
    expect(cardContainer).toBeDefined();
  });
  test('render CardList component', () => {
    const { container } = render(<CardList cards={cards} />);
    const cardsAmount = container.querySelectorAll('li');
    expect(cardsAmount.length).toBe(20);
  });
});

describe('Search input tests', () => {
  test('render SearchInput component', () => {
    render(<SearchInput onChange={handleChange} />);
    const searchInput = screen.getByPlaceholderText('Search') as HTMLInputElement;
    expect(searchInput.placeholder).toBe('Search');
  });
  test('SearchInput check', () => {
    render(<SearchInput onChange={handleChange} />);
    const searchInput = screen.getByTestId('search-input') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: '23' } });
    expect(searchInput.value).toBe('23');
  });
  test('Save SearchInput in localStorage', () => {
    const { unmount } = render(<SearchInput onChange={handleChange} />);
    const searchInput = screen.getByTestId('search-input') as HTMLInputElement;
    fireEvent.keyDown(searchInput, { target: { value: '23' } });
    unmount();
    expect(window.localStorage.searchInputValue).toBeDefined;
  });
});

describe('router test', () => {
  test('Full app rendering/navigating', async () => {
    render(<App />);
    const user = userEvent.setup();
    expect(screen.getByTestId('main')).toBeDefined;
    await user.click(screen.getByText(/about/i));
    expect(screen.getByText(/This app created by Sashkakotov/i)).toBeDefined;
  });
});

describe('Forms tests', () => {
  test('test name input', () => {
    render(<Forms />);
    const nameInput = screen.getByTestId('forms-name__input') as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: '23' } });
    expect(nameInput.value).toBe('23');
  });
  test('test', () => {
    render(<Forms />);
    const dateInput = screen.getByTestId('forms-date__input') as HTMLInputElement;
    fireEvent.change(dateInput, { target: { value: '2023-03-25' } });
    expect(dateInput.value).toBe('2023-03-25');
  });
  test('test message', () => {
    render(<PopUp />);
    expect(screen.getByText('Card has been created')).toBeInTheDocument();
  });
  test('render form', () => {
    render(<Forms />);
    expect(screen.getByText('Name:')).toBeInTheDocument();
  });

  describe('Cards tests', async () => {
    test('render CardFromForm component', () => {
      render(<CardFromForm {...catsData.cats[0]} />);
      const cardContainer = screen.getByTestId('card-item__container');
      expect(cardContainer).toBeDefined();
    });
  });
});
