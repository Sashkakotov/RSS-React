import { SEARCH_INPUT_PLACEHOLDER } from '../../../constants/constants';
import React, { KeyboardEvent, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { cardSlice } from '../../../store/reducers/cardSlice';

const SearchInput = (props: {
  onChange: (e: KeyboardEvent<HTMLInputElement>) => Promise<void>;
}) => {
  const dispatch = useAppDispatch();
  const { searchInputValue } = useAppSelector((state) => state.cardReducer);
  // const [searchInputValue, setSearchInputValue] = useState('');

  const searchInputRef = useRef<string>();

  useEffect(() => {
    searchInputRef.current = searchInputValue;
  });

  const handleChanges = (e: React.SyntheticEvent) =>
    dispatch(cardSlice.actions.setSearchInputValue((e.target as HTMLInputElement).value));
  // setSearchInputValue((e.target as HTMLInputElement).value);

  return (
    <div className="search-input__container">
      <input
        onChange={handleChanges}
        onKeyUp={handleChanges}
        onKeyDown={props.onChange}
        type="text"
        className="search__input"
        placeholder={SEARCH_INPUT_PLACEHOLDER}
        value={searchInputValue}
        data-testid="search-input"
      />
    </div>
  );
};
export default SearchInput;
