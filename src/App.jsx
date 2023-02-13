import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';

import Search from './components/Filters/Search';
import Filter from './components/Filters/Filter';
import Header from './components/Header';
import Countries from './components/Countries';
import FullCountry from './components/FullCountry';
import { selectCountryData } from './redux/country/selectors';
import { selectFilter } from './redux/filters/selectors';
import { fetchCountries } from './redux/country/asyncActions';

function App() {
  const isSearch = React.useRef(false);
  const dispatch = useDispatch();
  const { items, status } = useSelector(selectCountryData);
  const { searchValue } = useSelector(selectFilter);

  const getCountries = async () => {
    const search = searchValue ? `${searchValue}` : '';

    dispatch(
      fetchCountries({
        search,
      }),
    );
  };

  React.useEffect(() => {
    if (!isSearch.current) {
      getCountries();
    }

    isSearch.current = false;
  }, [searchValue]);

  return (
    <>
      <Header/>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="filters">
                  <Search />
                  <Filter />
                </div>
                <Grid container rowSpacing={5} columnSpacing={3}>
                  {status === 'loading' ? (
                    <span>Loading...</span>
                  ) : (
                    items.map((obj, i) => <Countries key={i} {...obj} />)
                  )}
                </Grid>
              </>
            }
          />
          <Route path="/country/:name" element={<FullCountry />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
