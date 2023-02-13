import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import './FullCountry.scss';

const FullCountry = () => {
  const [country, setCountry] = React.useState([]);
  const name = 'USA';

  const fetchCountry = () => {
    fetch('https://restcountries.com/v3.1/name/' + name)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    fetchCountry();
  }, []);

  if (!country) {
    return <>Loading...</>;
  }

  return (
    <div>
      <Button
        component={Link}
        to="/"
        sx={{
          pr: '35px',
          color: '#8a8c8e',
          border: '1px solid #e7e7e7',
          mt: '3rem',
          backgroundColor: '#fff',
          boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.21)',
        }}
        variant="outlined">
        <KeyboardBackspaceIcon sx={{ pb: '2px', pr: '7px', pl: '4px' }}></KeyboardBackspaceIcon>
        Back
      </Button>
      {country.map((item, i) => {
        return (
          <>
            <div className="info">
              <img className="info__image" src={item.flags.png} alt="Image" />
              <div className="info__blocks">
                <span className="info__blocks-name">{item.name.common}</span>
                <div className="info__blocks-block1">
                  <ul>
                    <li>
                      <b>Native Name:</b> {Object.keys(item.name.nativeName).map((e, i) => (
                        <span key={i}>{' ' + item.name.nativeName[e].common}</span>
                      ))}
                    </li>
                    <li>
                      <b>Population:</b> {item.population}
                    </li>
                    <li>
                      <b>Region:</b> {item.region}
                    </li>
                    <li>
                      <b>Sub Region:</b> {item.subregion}
                    </li>
                    <li>
                      <b>Capital:</b> {item.capital}
                    </li>
                  </ul>
                  <span className="info__blocks-block1-borders">
                    <b>Border countries: </b>
                    {item.borders ? item.borders.map((e, i) => (
                      <span key={i} className="border-elements">
                        {e}
                      </span>
                    )) : <span  className="border-elements">None</span>}
                  </span>
                </div>
                <div className="info__blocks-block2">
                  <ul>
                    <li>
                      <b>Top Level Domain:</b> {item.tld}
                    </li>
                    <li>
                      <b>Currencies:</b> {Object.keys(item.currencies).map((e, i) => (
                        <span key={i}>{' ' + item.currencies[e].name}</span>
                      ))}
                    </li>
                    <li>
                      <b>Languages:</b>
                      {Object.keys(item.languages).map((e, i) => (
                        <span key={i}>{' ' + item.languages[e]}</span>
                      ))}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default FullCountry;
