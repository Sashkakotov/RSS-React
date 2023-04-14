import React, { PropsWithChildren, SyntheticEvent } from 'react';
import { render, screen, fireEvent, RenderOptions } from '@testing-library/react';
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
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppStore, RootState, setupStore } from '../src/store/store';
import { PreloadedState, configureStore, AnyAction } from '@reduxjs/toolkit';
import { cardsAPI } from '../src/services/cardsServices';
import { FormState } from 'react-hook-form';
import { CardsState } from '../src/types/types';
import Error from '../src/pages/Error';
import Home from '../src/pages/Home';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

// export function renderWithProviders(
//   component: React.ReactElement,
//   {
//     preloadedState = {},
//     // Automatically create a store instance if no store was passed in
//     store = configureStore({
//       reducer: {
//         cardReducer,
//         [cardsAPI.reducerPath]: cardsAPI.reducer,
//         formReducer,
//       },
//       middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsAPI.middleware),
//       preloadedState,
//     }),
//     ...renderOptions
//   }: ExtendedRenderOptions = {}
// ) {
//   function Wrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
//     return <Provider store={store}>{children}</Provider>;
//   }

// Return an object with the store and all of RTL's query functions
//   return { store, ...render(component, { wrapper: Wrapper, ...renderOptions }) };
// }
export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

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
  test('render PopUp component', () => {
    render(<CardItem card={cards[0]} isModal={false} />);
    const dd = screen.getByTestId('card-photo');
    fireEvent.click(dd);
    const cardContainer = screen.getByTestId('pop-up__container');
    expect(cardContainer).toBeDefined();
  });
});

describe('Search input tests', () => {
  test('render SearchInput component', () => {
    renderWithProviders(<SearchInput onChange={handleChange} />);
    const searchInput = screen.getByPlaceholderText('Search') as HTMLInputElement;
    expect(searchInput.placeholder).toBe('Search');
  });
  test('SearchInput check', () => {
    renderWithProviders(<SearchInput onChange={handleChange} />);
    const searchInput = screen.getByTestId('search-input') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: '23' } });
    expect(searchInput.value).toBe('23');
  });
});

describe('router test', () => {
  test('Full app rendering/navigating', async () => {
    renderWithProviders(<App />);
    const user = userEvent.setup();
    expect(screen.getByTestId('main')).toBeDefined;
    await user.click(screen.getByText(/about/i));
    expect(screen.getByText(/This app created by Sashkakotov/i)).toBeDefined;
  });
  test('Error Page test', () => {
    render(<Error />);
    const errorPage = screen.getByTestId('error');
    expect(errorPage).toBeDefined();
  });
  // test('Error Page test', () => {
  //   renderWithProviders(<Home />);
  //   const cardsList = screen.getByTestId('cards__list');
  //   expect(cardsList).toBeDefined();
  // });
});

describe('Forms tests', () => {
  test('test name input', () => {
    renderWithProviders(<Forms />);
    const nameInput = screen.getByTestId('forms-name__input') as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: '23' } });
    expect(nameInput.value).toBe('23');
  });
  test('test', () => {
    renderWithProviders(<Forms />);
    const dateInput = screen.getByTestId('forms-date__input') as HTMLInputElement;
    fireEvent.change(dateInput, { target: { value: '2023-03-25' } });
    expect(dateInput.value).toBe('2023-03-25');
  });
  test('test message', () => {
    renderWithProviders(<PopUp />);
    expect(screen.getByText('Card has been created')).toBeInTheDocument();
  });
  test('render form', () => {
    renderWithProviders(<Forms />);
    expect(screen.getByText('Name:')).toBeInTheDocument();
  });
  test('form', () => {
    renderWithProviders(<Forms />);
    const NameInput = screen.getByLabelText('Name:');
    const Photoinput = screen.getByLabelText('Photo:');
    const DateInput = screen.getByLabelText('Created:');
    const SpeciesSelect = screen.getByLabelText('Species:') as HTMLSelectElement;
    const LocationInput = screen.getByLabelText('Location:');
    const GendersInput = screen.getByLabelText('Male');
    const AliveInput = screen.getByLabelText('Alive');

    fireEvent.keyDown(NameInput, { target: { value: 'ASs' } });
    fireEvent.keyDown(LocationInput, { target: { value: 'ASs' } });
    fireEvent.change(SpeciesSelect, { target: { value: 'Abyssinian' } });
    fireEvent.keyDown(DateInput, { target: { value: '2023-03-22' } });
    fireEvent.click(GendersInput);
    fireEvent.click(AliveInput);
    const file = new File(['background'], 'background.jpg', {
      type: 'image/jpg',
    });
    fireEvent.change(Photoinput, {
      target: { files: [file] },
    });
    fireEvent.click(screen.getByTestId('form__submit'));
    expect(SpeciesSelect.value).to.equal('2023-03-22');
  });

  describe('Cards tests', async () => {
    test('render CardFromForm component', () => {
      renderWithProviders(<CardFromForm {...catsData.cats[0]} />);
      const cardContainer = screen.getByTestId('card-item__container');
      expect(cardContainer).toBeDefined();
    });
  });
});
