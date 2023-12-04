import React from "react";
import { Grid, Image } from 'semantic-ui-react';

const ChronologicalPage = () => {   
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Grid>
                    <Grid.Column style={{ width: '84vw', margin: 5 }}>
                        <Image src='/Timeline_of_World_History.png' style={{ width: '100%' }} />
                    </Grid.Column>
                </Grid>
            </div>
        </>
    );
}
export default ChronologicalPage;   