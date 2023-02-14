import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createTheme, Grid, IconButton, ThemeProvider, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

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

  const [mode, setMode] = React.useState('light');
  console.log(mode);

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const onChangeMode = (obj) => {
    setMode(obj);
  };

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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Header mode={mode} setMode={setMode}/>
        
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
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
