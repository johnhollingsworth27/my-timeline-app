/* eslint-disable max-len */

import React from 'react'
import { Header, Grid, Image } from 'semantic-ui-react'

const Intro = () => (
    <Grid>
        <Grid.Column width={12}>
            <Header as='h2'>Welcome </Header>
            <p style={{ fontSize: '1.7em' }}>
                History in a Nutshell offers a panoramic view of history that stretches from the dawn of existence to the complexities of the present day. 
                It is not just a portal to the past; it's a comprehensive exploration of the continuum of existence, for anyone seeking to understand the breadth and depth of our collective history.
            </p>
            <br />
        </Grid.Column>
        <Grid.Column width={3}>
            <Image src='/time2.png' />
        </Grid.Column>
    </Grid>

    
    
)

export default Intro;