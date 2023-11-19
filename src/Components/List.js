import React from 'react'
import { Grid, List } from 'semantic-ui-react'

const ListExampleBulleted = () => (
    <Grid columns={4}>
        <Grid.Column>
            <List bulleted>
                <List.Item>
                <div style={{ color: 'black', fontSize: '1.5em' }}>
                    Chronological</div>
                    <List.List>
                        <List.Item href='/prehistoric' style={{ color: 'black', fontWeight: 'bold' }}>
                            Prehistoric</List.Item>
                        <List.List>
                            <List.Item href='/paleolithic'>Paleolithic</List.Item>
                            <List.Item href='#'>Mesolithic</List.Item>
                            <List.Item href='#'>Neolithic</List.Item>
                        </List.List><br />
                        <List.Item href='#' style={{ color: 'black', fontWeight: 'bold' }}>
                            Ancient History</List.Item>
                        <List.List>
                            <List.Item href='/earlycivilizations'>Early Civilizations</List.Item>
                            <List.Item href='#'>Classical Antiquity</List.Item>
                        </List.List><br />
                        <List.Item href='#' style={{ color: 'black', fontWeight: 'bold' }}>
                            Medieval History</List.Item>
                        <List.List>
                            <List.Item href='/paleolithic'>Early Middle Ages</List.Item>
                            <List.Item href='#'>High Middle Ages</List.Item>
                            <List.Item href='#'>Late Middle Ages</List.Item>
                        </List.List><br />
                        <List.Item href='#' style={{ color: 'black', fontWeight: 'bold' }}>
                            Modern History</List.Item>
                        <List.List>
                            <List.Item href='/paleolithic'>Early Modern</List.Item>
                            <List.Item href='#'>Late Modern</List.Item>
                        </List.List><br />
                        <List.Item href='#' style={{ color: 'black', fontWeight: 'bold' }}>
                            Contemporary History</List.Item>
                        <List.List>
                            <List.Item href='/paleolithic'>20th Century</List.Item>
                            <List.Item href='#'>21st Century</List.Item>
                        </List.List>
                    </List.List>
                </List.Item>
            </List>
        </Grid.Column>
        <Grid.Column>
            <List bulleted>
                <List.Item>
                <div style={{ color: 'black', fontSize: '1.5em' }}>
                    Geographical</div>
                    <List.List>
                        <List.Item href='#'>Africa</List.Item>
                        <List.Item href='#'>Asia</List.Item>
                        <List.Item href='#'>Europe</List.Item>
                        <List.Item href='#'>North America</List.Item>
                        <List.Item href='#'>South America</List.Item>
                        <List.Item href='#'>Oceana</List.Item>
                        <List.Item href='#'>Polar Regions</List.Item>
                    </List.List>
                </List.Item>
            </List>
        </Grid.Column>
        <Grid.Column>
            <List bulleted>
                <List.Item>
                <div style={{ color: 'black', fontSize: '1.5em' }}>
                    Thematic</div>
                    <List.List>
                        <List.Item href='#' style={{ color: 'black', fontWeight: 'bold' }}>
                            Cultural</List.Item>
                        <List.List>
                            <List.Item href='/paleolithic'>Art, Literature, Music</List.Item>
                            <List.Item href='#'>Daily Life and Customs</List.Item>
                            <List.Item href='#'>Philosophy</List.Item>
                            <List.Item href='#'>Religion and Beliefs</List.Item>
                        </List.List><br />
                        <List.Item href='#' style={{ color: 'black', fontWeight: 'bold' }}>
                            Economic</List.Item>
                        <List.List>
                            <List.Item href='/paleolithic'>Economic Theories and Systems</List.Item>
                            <List.Item href='#'>Industrial Developments</List.Item>
                            <List.Item href='#'>Trade and Commerce</List.Item>
                        </List.List><br />
                        <List.Item href='#' style={{ color: 'black', fontWeight: 'bold' }}>
                            Environmental</List.Item>
                        <List.List>
                            <List.Item href='/paleolithic'>Climate and Geography</List.Item>
                            <List.Item href='#'>Human Impact</List.Item>
                            <List.Item href='#'>Natural Disasters</List.Item>
                        </List.List><br />
                        <List.Item href='#' style={{ color: 'black', fontWeight: 'bold' }}>
                            Political</List.Item>
                        <List.List>
                            <List.Item href='/paleolithic'>Empires and Kingdoms</List.Item>
                            <List.Item href='#'>Treaties and Diplomacy</List.Item>
                            <List.Item href='#'>Wars and Conflicts</List.Item>
                        </List.List><br />
                        <List.Item href='#' style={{ color: 'black', fontWeight: 'bold' }}>
                            Scientific</List.Item>
                        <List.List>
                            <List.Item href='/paleolithic'>Inventions and Discoveries</List.Item>
                            <List.Item href='#'>Scientific Movements</List.Item>
                            <List.Item href='#'>Technological Advancements</List.Item>
                        </List.List>
                    </List.List>
                </List.Item>
            </List>
        </Grid.Column>
        <Grid.Column>
            <List bulleted>
                <List.Item>
                <div style={{ color: 'black', fontSize: '1.5em' }}>
                    Biographical</div>
                    <List.List>
                        <List.Item href='#'>Artists and Composers</List.Item>
                        <List.Item href='#'>Leaders and Politicians</List.Item>
                        <List.Item href='#'>Philosophers and Thinkers</List.Item>
                        <List.Item href='#'>Scientists and Inventors</List.Item>
                    </List.List>
                </List.Item>
                <br />
                <br />
                <List.Item>
                <div style={{ color: 'black', fontSize: '1.5em' }}>
                    Educational</div>
                    <List.List>
                        <List.Item href='#'>Timelines and Maps</List.Item>
                        <List.Item href='#'>Videos and Podcasts</List.Item>
                        <List.Item href='#'>Books and Articles</List.Item>
                    </List.List>
                </List.Item>
            </List>
        </Grid.Column>
    </Grid>
)

export default ListExampleBulleted;