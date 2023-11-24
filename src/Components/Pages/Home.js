import React from 'react';
import '../../CSS/home.css';
import ListExampleBulleted from '../List';
import Intro from '../Intro';
import GridExampleEqualWidthRow from '../Grid';
import HistoricalEvents from '../HistoricalEvents';
import { Grid, Image } from 'semantic-ui-react';
import ActionAreaCard from '../Card';

const Home = () => {
    return (
        <>
            <Intro />
            <ListExampleBulleted />
            <ActionAreaCard />
            <br />
            <h2>Quotes on History</h2>
            <GridExampleEqualWidthRow />
            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Grid>
                    <Grid.Column width={29}>
                        <Image src='/Timeline_of_World_History.png' />
                    </Grid.Column>
                </Grid>
            </div>
            <br />
            <br />
            <HistoricalEvents />
        </>
    );
};

export default Home;
