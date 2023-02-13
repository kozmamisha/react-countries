import { TextField } from '@mui/material';
import React from 'react';

const Search = (props) => {
  const { onChange, value } = props;

  return (
    <TextField
      sx={{
        backgroundColor: '#fff',
        width: 450,
        boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.21)',
      }}
      label="Search for a country"
      type="search"
      value={value}
      onChange={onChange}
    />
  );
};

export default Search;
