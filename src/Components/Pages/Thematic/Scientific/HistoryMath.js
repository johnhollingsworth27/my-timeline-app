import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccordionExample from '../../../Accordion';

const cardData = [
    {
        title: 'Pythagoras',
        subtitle: '550 - 500 bce',
        description: 'Pythagoras is credited with discovering the mathematical ratios that correspond to musical intervals, laying the groundwork for the study of acoustics. His geometric work included studies on polygons, proportions, figures, and the Pythagorean Theorem.',
        image: '/Math/pythagoras.jpg',
        alt: 'map background'
    },
    {
        title: 'Democritus',
        subtitle: '440 - 370 bce',
        description: 'Democritus posits that everything in the universe is made up of small, indivisible particles called atoms',
        image: '/Math/democritus.jpeg',
        alt: 'snake'
    },
    {
        title: 'Aristotle',
        subtitle: '365 - 320 bce',
        description: 'Aristotle organized the knowledge of the physical world, including mathematical principals. He developed the syllogism, a form of logical argument that became fundamental to mathematical reasoning.',
        image: '/Math/aristotle.jpeg',
        alt: 'turtle'
    },
    {
        title: 'Euclid',
        subtitle: '300 bce',
        description: 'Euclid publishes "Elements", serving as the main textbook for teaching mathematics, especially geometry, until the early 20th century. He also lays the foundation for the study of optics, which ultimately leads to a better understanding of the nature of light.',
        image: '/Math/euclid.jpeg',
        alt: 'map background'
    },
    {
        title: 'Archimedes',
        subtitle: '260 - 210 bce',
        description: 'Archimedes develops methods for calculating areas and volumes, principles in fluid mechanics, concept of center of gravity, invention of Archimedes screw to raise water',
        image: '/Math/archimedes.webp',
        alt: 'snake'
    },
    {
        title: 'Eratosthenes ',
        subtitle: '240 bce',
        description: 'Eratosthenes accurately calculated the Earth\'s circumference, developed the Sieve of Eratosthenes, an algorithm for finding all prime numbers up to a specified integer, and was among the first to apply mathematical principles to map-making, coining the term "geography".',
        image: '/Math/eratosthenes.jpeg',
        alt: 'turtle'
    },
    {
        title: 'Apollonius',
        subtitle: '220 - 190 bce',
        description: 'Apollonius provides geometric foundations for later work on eclipses by Johannes Kepler with his work on "Conics" (ellipse, parabola, hyperbola)',
        image: '/Math/apollonius.jpeg',
        alt: 'turtle'
    },
    {
        title: 'Hipparchus',
        subtitle: '170 - 130 bce',
        description: 'Hipparchus discovers the precession of the equinoxes, and compiles the first known trigonometric table for solving triangles, founding trigonometry',
        image: '/Math/hipparchus.jpg',
        alt: 'map background'
    },
    {
        title: 'Ptolemy',
        subtitle: '170 ce',
        description: 'Ptolemy published "Algamest", a treatise on the apparent motions of stars and planetary paths. He provided a geocentric model of the universe which dominated astronomical thought for centuries.',
        image: '/Math/ptolemy.jpeg',
        alt: 'snake'
    },
    {
        title: 'Diophantus ',
        subtitle: '220 - 270 ce',
        description: 'Diophantus publishes "Arithmetica", a collection of algebraic problems dealing with polynomial equations and integer solutions. His work laid the foundations for the development of algebra and he is known as the "father of algebra".',
        image: '/Math/diophantus.png',
        alt: 'turtle'
    }
];

export default function ActionAreaCard() {
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
                                    image={card.image}
                                    alt={card.alt}
                                />
                                <CardContent>
                                    <Box display="flex" flexDirection="row" alignItems="center">
                                        <Typography variant="h5" component="div">
                                            {card.title}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" sx={{ marginLeft: 2, lineHeight: 'inherit' }}>
                                            {card.subtitle}
                                        </Typography>
                                    </Box>
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