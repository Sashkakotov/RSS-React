import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardReducer from './reducers/cardSlice';
import formReducer from './reducers/formSlice';
import { cardsAPI } from '../services/cardsServices';

const rootReducer = combineReducers({
  cardReducer,
  [cardsAPI.reducerPath]: cardsAPI.reducer,
  formReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
