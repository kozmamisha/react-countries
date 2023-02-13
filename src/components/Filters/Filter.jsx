import * as React from 'react';import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

const Filter = () => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ backgroundColor: '#fff', width: 200, boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.21)' }}
      renderInput={(params) => <TextField {...params} label="Filter by Region" />}
    />
  );
};

export default Filter;
