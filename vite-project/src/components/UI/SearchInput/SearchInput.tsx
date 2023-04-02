import { SEARCH_INPUT_PLACEHOLDER } from '../../../constants/constants';
import React, {
  EventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

const SearchInput = (props: {
  onChange: (e: KeyboardEvent<HTMLInputElement>) => Promise<void>;
}) => {
  const [searchInputValue, setSearchInputValue] = useState(
    localStorage.getItem('searchValue') || ''
  );

  const searchInputRef = useRef<string>();

  useEffect(() => {
    searchInputRef.current = searchInputValue;
  });
  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', String(searchInputRef.current));
    };
  });
  const handleChanges = (e: React.SyntheticEvent) =>
    setSearchInputValue((e.target as HTMLInputElement).value);
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
