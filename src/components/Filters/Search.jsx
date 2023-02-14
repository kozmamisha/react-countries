import { TextField } from '@mui/material';
import debounce from 'lodash.debounce';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/filters/slice';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  console.log(value);

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 250),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <TextField
      sx={{
        //backgroundColor: '#fff',
        width: 450,
        boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.21)',
      }}
      label="Search for a country"
      type="search"
      value={value}
      onChange={onChangeInput}
    />
  );
};

export default Search;
