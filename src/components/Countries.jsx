import Grid from '@mui/material/Grid';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Countries = ({name, population, region, capital, flags}) => {
  return (
      <Grid item md={3}>
        <Link to={`/country/${name.common}`}>
          <Card sx={{ maxWidth: 350, width: '20vw', height: 320 }}>
            <CardActionArea>
              <CardMedia sx={{ height: 150}} component="img" image={flags.png} alt="Image" />
              <CardContent>
                <Typography sx={{ fontWeight: 500 }} gutterBottom variant="h5" component="div">
                  {name.common}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Population: {population}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Region: {region}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Capital: {capital}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
  );
};

export default Countries;
