import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

const cardData = [
  {
    title: 'Lizard',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    image: '/mapback.jpg',
    alt: 'map background'
  },
  {
    title: 'Snake',
    description: 'Snakes are elongated, legless, carnivorous reptiles of the suborder Serpentes',
    image: '/mapback.jpg',
    alt: 'snake'
  },
  {
    title: 'Turtle',
    description: 'Turtles are reptiles of the order Testudines characterized by a special bony or cartilaginous shell developed from their ribs',
    image: '/mapback.jpg',
    alt: 'turtle'
  }
];

export default function ActionAreaCard() {
  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt={card.alt}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}