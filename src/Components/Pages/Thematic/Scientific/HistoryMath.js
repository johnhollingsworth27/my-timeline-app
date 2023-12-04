import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import AccordionExample from '../../../Accordion';

export default function HistoryMath() {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        fetch('https://math-data.s3.us-east-2.amazonaws.com/json/mathematicianCards.json')
            .then(response => response.json())
            .then(data => setCardData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <AccordionExample />
            <Typography variant="h4" component="h2" gutterBottom>
                Ancient Mathematicians
            </Typography>
            <Grid container spacing={2}>
                {cardData.map((card, index) => (
                    <Grid item xs={4} key={index}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={card.imageURL}
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
        </div>
    );
}