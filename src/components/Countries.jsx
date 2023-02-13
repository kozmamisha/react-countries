import Grid from '@mui/material/Grid';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Countries = () => {
  return (
    <Grid container rowSpacing={5} columnSpacing={3}>
      <Grid item md="3">
        <Link to="/country/qweqwe">
          <Card sx={{ maxWidth: 350 }}>
            <CardActionArea>
              <CardMedia component="img" image="https://flagcdn.com/w320/ck.png" alt="Image" />
              <CardContent>
                <Typography sx={{ fontWeight: 500 }} gutterBottom variant="h5" component="div">
                  Country
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Population: 12434523
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Region: Europe
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Capital: Berlin
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>

      <Grid item md="3">
        <Card sx={{ maxWidth: 350 }}>
          <CardActionArea>
            <CardMedia component="img" image="https://flagcdn.com/w320/ck.png" alt="Image" />
            <CardContent>
              <Typography sx={{ fontWeight: 500 }} gutterBottom variant="h5" component="div">
                Country
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Population: 12434523
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Region: Europe
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Capital: Berlin
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item md="3">
        <Card sx={{ maxWidth: 350 }}>
          <CardActionArea>
            <CardMedia component="img" image="https://flagcdn.com/w320/ck.png" alt="Image" />
            <CardContent>
              <Typography sx={{ fontWeight: 500 }} gutterBottom variant="h5" component="div">
                Country
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Population: 12434523
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Region: Europe
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Capital: Berlin
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item md="3">
        <Card sx={{ maxWidth: 350 }}>
          <CardActionArea>
            <CardMedia component="img" image="https://flagcdn.com/w320/ck.png" alt="Image" />
            <CardContent>
              <Typography sx={{ fontWeight: 500 }} gutterBottom variant="h5" component="div">
                Country
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Population: 12434523
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Region: Europe
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Capital: Berlin
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item md="3">
        <Card sx={{ maxWidth: 350 }}>
          <CardActionArea>
            <CardMedia component="img" image="https://flagcdn.com/w320/ck.png" alt="Image" />
            <CardContent>
              <Typography sx={{ fontWeight: 500 }} gutterBottom variant="h5" component="div">
                Country
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Population: 12434523
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Region: Europe
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Capital: Berlin
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item md="3">
        <Card sx={{ maxWidth: 350 }}>
          <CardActionArea>
            <CardMedia component="img" image="https://flagcdn.com/w320/ck.png" alt="Image" />
            <CardContent>
              <Typography sx={{ fontWeight: 500 }} gutterBottom variant="h5" component="div">
                Country
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Population: 12434523
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Region: Europe
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Capital: Berlin
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item md="3">
        <Card sx={{ maxWidth: 350 }}>
          <CardActionArea>
            <CardMedia component="img" image="https://flagcdn.com/w320/ck.png" alt="Image" />
            <CardContent>
              <Typography sx={{ fontWeight: 500 }} gutterBottom variant="h5" component="div">
                Country
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Population: 12434523
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Region: Europe
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Capital: Berlin
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item md="3">
        <Card sx={{ maxWidth: 350 }}>
          <CardActionArea>
            <CardMedia component="img" image="https://flagcdn.com/w320/ck.png" alt="Image" />
            <CardContent>
              <Typography sx={{ fontWeight: 500 }} gutterBottom variant="h5" component="div">
                Country
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Population: 12434523
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Region: Europe
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Capital: Berlin
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Countries;
