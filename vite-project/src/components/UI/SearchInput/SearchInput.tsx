import { SEARCH_INPUT_PLACEHOLDER } from '../../../constants/constants';
import React, { useEffect, useRef, useState } from 'react';

const SearchInput = () => {
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

  const handleChange = (e: React.SyntheticEvent) =>
    setSearchInputValue((e.target as HTMLInputElement).value);

  return (
    <div className="search-input__container">
      <input
        onChange={handleChange}
        onKeyDown={handleChange}
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
