import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(null);

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, filteredData, setFilteredData }}>
      {children}
    </SearchContext.Provider>
  );
};
