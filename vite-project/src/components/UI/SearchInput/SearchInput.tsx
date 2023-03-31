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

const SearchInput = (props) => {
  // const [searchInputValue, setSearchInputValue] = useState();

  // const searchInputRef = useRef<string>();

  // useEffect(() => {
  //   searchInputRef.current = searchInputValue;
  // });
  // useEffect(() => {
  //   return () => {
  //     localStorage.setItem('searchValue', String(searchInputRef.current));
  //   };
  // });

  //

  return (
    <div className="search-input__container">
      <input
        // onChange={handleChange}
        onKeyDown={props.change}
        type="text"
        className="search__input"
        placeholder={SEARCH_INPUT_PLACEHOLDER}
        // value={searchInputValue}
        data-testid="search-input"
      />
    </div>
  );
};
export default SearchInput;
