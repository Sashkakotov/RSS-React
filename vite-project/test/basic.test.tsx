import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, test, expect } from 'vitest';
import CardItem from '../src/components/UI/CardItem';
import productItems from '../src/API/fakeJSON';
import CardList from '../src/components/UI/CardList';
import SearchInput from '../src/components/UI/input/SearchInput';
import App from '../src/App';

describe('Cards tests', () => {
  test('render CardItem component', () => {
    render(<CardItem {...productItems.products[0]} />);
    const cardContainer = screen.getByLabelText('card-item__container');
    expect(cardContainer).toBeDefined();
  });
  test('render CardList component', () => {
    const { container } = render(<CardList />);
    const cardsAmount = container.querySelectorAll('li');
    expect(cardsAmount.length).toBe(productItems.products.length);
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
    const searchInput = screen.getByLabelText('search-input') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: '23' } });
    expect(searchInput.value).toBe('23');
  });
  test('Save SearchInput in localStorage', () => {
    const { unmount } = render(<SearchInput />);
    const searchInput = screen.getByLabelText('search-input') as HTMLInputElement;
    fireEvent.keyDown(searchInput, { target: { value: '23' } });
    unmount();
    expect(window.localStorage.searchInputValue).toBeDefined;
  });
});

describe('router test', () => {
  test('Full app rendering/navigating', async () => {
    render(<App />);
    const user = userEvent.setup();
    expect(screen.getByLabelText('main')).toBeDefined;
    await user.click(screen.getByText(/about/i));
    expect(screen.getByText(/This app created by Sashkakotov/i)).toBeDefined;
  });
});
