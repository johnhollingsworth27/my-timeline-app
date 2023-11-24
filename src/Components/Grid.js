import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const GridExampleEqualWidthRow = () => (
    <Grid columns='equal'>
        <Grid.Row>
            <Grid.Column>
                <Segment>"You have to know the past to know the present." - Carl Sagan
                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>"I have no special talent, I am only passionately curious." - Einstein
                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>"History repeats itself, first as tragedy, second as farce." - Marx</Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>“History is a set of lies, agreed upon.” - Napoleon
                </Segment>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <Segment>“History is always written by the winners. When two cultures clash, the loser is obliterated, and the winner writes the history books-books which glorify their own cause and disparage the conquered foe.” - Dan brown
                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>“What experience and history teach is that nations and governments have never learned anything from history, or acted upon any lessons they might have drawn from it.” - Hegel</Segment>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <Segment>“Study history, study history. In history lies all the secrets of statecraft.” - Confucius
                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>“History is the study of all the world’s crime.” - Voltaire</Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>“If you don’t know history, it’s as if you were born yesterday. If you were born yesterday then any leader can tell you anything.” - Howard Zinn
                </Segment>
            </Grid.Column>
        </Grid.Row>
        
    </Grid>
)

export default GridExampleEqualWidthRow