import React from 'react';
import '../../CSS/home.css';
import ListExampleBulleted from '../List';
import Intro from '../Intro';
import GridExampleEqualWidthRow from '../Grid';
import HistoricalEvents from '../HistoricalEvents';
import ActionAreaCard from '../Card';

const Home = () => {
    return (
        <>
            <Intro />
            
            <ListExampleBulleted />
            <br />
            <br />
            <ActionAreaCard />
            <br />
            <h2>Quotes on History</h2>
            <GridExampleEqualWidthRow />
            
            <br />
            <br />
            <br />
            <HistoricalEvents />
        </>
    );
};

export default Home;
