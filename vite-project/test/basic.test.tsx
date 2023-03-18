import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, test, expect } from 'vitest';
import CardItem from '../src/components/UI/CardItem';

import CardList from '../src/components/UI/CardList';
import SearchInput from '../src/components/UI/input/SearchInput';
import App from '../src/App';
import { cats } from '../src/data/data.json';

describe('Cards tests', () => {
  test('render CardItem component', () => {
    render(<CardItem {...cats[0]} />);
    const cardContainer = screen.getByTestId('card-item__container');
    expect(cardContainer).toBeDefined();
  });
  test('render CardList component', () => {
    const { container } = render(<CardList cats={cats} />);
    const cardsAmount = container.querySelectorAll('li');
    expect(cardsAmount.length).toBe(cats.length);
  });
});

describe('Search input tests', () => {
  test('render SearchInput component', () => {
    render(<SearchInput />);
    const searchInput = screen.getByPlaceholderText('Search') as HTMLInputElement;
    expect(searchInput.placeholder).toBe('Search');
  });
  test('SearchInput check', () => {
    render(<SearchInput />);
    const searchInput = screen.getByTestId('search-input') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: '23' } });
    expect(searchInput.value).toBe('23');
  });
  test('Save SearchInput in localStorage', () => {
    const { unmount } = render(<SearchInput />);
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
