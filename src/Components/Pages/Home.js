import React from 'react';
import '../../home.css';
import ListExampleBulleted from '../List';
import Intro from '../Intro';
import GridExampleEqualWidthRow from '../Grid';

const Home = () => {
    return (
        <>
            <Intro />
            <ListExampleBulleted />
            {/* <section className="hero">
                <h1 className="hero-title">
                    <strong> Past Puzzles and Assembling History's Pieces</strong>
                </h1>
                <p className="hero-subtitle">
                    <strong>Discover How Each Historical Piece Fits in the Grand Scheme of Time</strong>
                </p>
            </section> */}
            <br />
            <h1>Quotes on History</h1>
            <GridExampleEqualWidthRow />
        </>
    );
};

export default Home;
