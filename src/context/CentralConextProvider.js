
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import CentralContext from './CentralContext';

function CentralContextProvider({ children }) {
  const [allErrors, setAllErrors] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [filters, setFilters] = useState([]);
  const [filteredErrors, setFilteredErrors] = useState([]);

  useEffect(() => {
    if (allErrors !== undefined) {
      setIsFetching(false);
    }
  }, [allErrors]);

 /*  const filterFoodByCategory = async (category) => {
    if (!filtered || filter !== category) {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      const filteredMeals = await response.json();
      setFirstTwelveRecipes(filteredMeals.meals.slice(zero, twelve));
      setIsFetching(false);
      setFilter(category);
      setFiltered(true);
    } else {
      setFiltered(false);
    }
  };

  const filterDrinkByCategory = async (category) => {
    if (!filtered || filter !== category) {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
      const filteredDrinks = await response.json();
      setFirstTwelveRecipes(filteredDrinks.drinks.slice(zero, twelve));
      setIsFetching(false);
      setFilter(category);
      setFiltered(true);
    } else {
      setFiltered(false);
    }
  };
 */
  return (
    <CentralContext.Provider
      value={ {
        isFetching,
        setIsFetching,
        allErrors,
        setAllErrors,
        filters,
        setFilters,
        filteredErrors,
        setFilteredErrors,
        // filterFoodByCategory,
        // filterDrinkByCategory,
      } }
    >
      {children}
    </CentralContext.Provider>
  );
}

CentralContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CentralContextProvider;
