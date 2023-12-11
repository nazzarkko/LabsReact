import React, { useState, useEffect } from 'react';
import {  sortAircrafts, searchAircrafts } from '../../../../../src/api.js';
import Item from './Item.js';
import Spinner from './Spinner';


const SearchNavigationBar = () => {
  const [aircrafts, setAircrafts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState(''); 
  const [sortDirection, setSortDirection] = useState('asc'); 
  useEffect(() => {
    fetchData();
  }, [sortBy, sortDirection]);


  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await (searchValue
        ? searchAircrafts(searchValue, sortBy, sortDirection)
        : sortAircrafts(sortBy, sortDirection));
      setAircrafts(data);
    } catch (error) {
      console.error('Error fetching aircrafts:', error);
    } finally {
      setLoading(false);
    }
  };

  const sortAircraftsHandler = async (direction) => {
    try {
      setLoading(true);
      setAircrafts(await sortAircrafts('price', direction));
    } finally {
      setLoading(false);
    }
  };
  
  

  const searchAircraftsHandler = async () => {
    try {
      setLoading(true);
      await fetchData(); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="SearchNavigationBar">
      <button className="AircraftButton" onClick={() => sortAircraftsHandler('asc')}>
      SORT ASC
    </button>
    <button className="AircraftButton" onClick={() => sortAircraftsHandler('desc')}>
     SORT DESC
    </button>

      <button className="AircraftButton" onClick={searchAircraftsHandler}>
        SEARCH
      </button>
      <input
        id="search_section"
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        placeholder="Search by model"
      />

      {loading ? (
        <Spinner />
      ) : (
        <div className="ListOfAircrafts">
          {aircrafts.map((aircraft, index) => (
            <Item
              key={index}
              image={aircraft.image}
              model={aircraft.model}
              price={aircraft.price}
              description={aircraft.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchNavigationBar;
