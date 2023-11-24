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
                            <List.Item href='/mesolithic'>Mesolithic</List.Item>
                            <List.Item href='/neolithic'>Neolithic</List.Item>
                        </List.List><br />
                        <List.Item href='/ancientHistory' style={{ color: 'black', fontWeight: 'bold' }}>
                            Ancient History</List.Item>
                        <List.List>
                            <List.Item href='/earlycivilizations'>Early Civilizations</List.Item>
                            <List.Item href='/classicalAntiquity'>Classical Antiquity</List.Item>
                        </List.List><br />
                        <List.Item href='/medievalHistory' style={{ color: 'black', fontWeight: 'bold' }}>
                            Medieval History</List.Item>
                        <List.List>
                            <List.Item href='/earlyMiddleAges'>Early Middle Ages</List.Item>
                            <List.Item href='/highMiddleAges'>High Middle Ages</List.Item>
                            <List.Item href='/lateMiddleAges'>Late Middle Ages</List.Item>
                        </List.List><br />
                        <List.Item href='/modernHistory' style={{ color: 'black', fontWeight: 'bold' }}>
                            Modern History</List.Item>
                        <List.List>
                            <List.Item href='/earlyModernPeriod'>Early Modern</List.Item>
                            <List.Item href='/lateModernPeriod'>Late Modern</List.Item>
                        </List.List><br />
                        <List.Item href='/contemporaryHistory' style={{ color: 'black', fontWeight: 'bold' }}>
                            Contemporary History</List.Item>
                        <List.List>
                            <List.Item href='/20thCentury'>20th Century</List.Item>
                            <List.Item href='/21stCentury'>21st Century</List.Item>
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
                        <List.Item href='/africa'>Africa</List.Item>
                        <List.Item href='/asia'>Asia</List.Item>
                        <List.Item href='/europe'>Europe</List.Item>
                        <List.Item href='/northAmerica'>North America</List.Item>
                        <List.Item href='southAmerica'>South America</List.Item>
                        <List.Item href='oceana'>Oceana</List.Item>
                        <List.Item href='polarRegions'>Polar Regions</List.Item>
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
                        <List.Item href='/cultural' style={{ color: 'black', fontWeight: 'bold' }}>
                            Cultural</List.Item>
                        <List.List>
                            <List.Item href='/artLiteratureMusic'>Art, Literature, Music</List.Item>
                            <List.Item href='/dailyLifeCustoms'>Daily Life and Customs</List.Item>
                            <List.Item href='/philosophy'>Philosophy</List.Item>
                            <List.Item href='/religionBeliefs'>Religion and Beliefs</List.Item>
                        </List.List><br />
                        <List.Item href='economic' style={{ color: 'black', fontWeight: 'bold' }}>
                            Economic</List.Item>
                        <List.List>
                            <List.Item href='/theoriesSystems'>Economic Theories and Systems</List.Item>
                            <List.Item href='/industrialDevelopments'>Industrial Developments</List.Item>
                            <List.Item href='/tradeCommerce'>Trade and Commerce</List.Item>
                        </List.List><br />
                        <List.Item href='/environmental' style={{ color: 'black', fontWeight: 'bold' }}>
                            Environmental</List.Item>
                        <List.List>
                            <List.Item href='/climateGeography'>Climate and Geography</List.Item>
                            <List.Item href='/humanImpact'>Human Impact</List.Item>
                            <List.Item href='/naturallDisasters'>Natural Disasters</List.Item>
                        </List.List><br />
                        <List.Item href='/political' style={{ color: 'black', fontWeight: 'bold' }}>
                            Political</List.Item>
                        <List.List>
                            <List.Item href='/empiresKingdoms'>Empires and Kingdoms</List.Item>
                            <List.Item href='/treatiesDiplomacy'>Treaties and Diplomacy</List.Item>
                            <List.Item href='/warsConflicts'>Wars and Conflicts</List.Item>
                        </List.List><br />
                        <List.Item href='/scienceTech' style={{ color: 'black', fontWeight: 'bold' }}>
                            Scientific</List.Item>
                        <List.List>
                            <List.Item href='/inventionsDiscoveries'>Inventions and Discoveries</List.Item>
                            <List.Item href='/scientificMovements'>Scientific Movements</List.Item>
                            <List.Item href='/technologicalAdvancements'>Technological Advancements</List.Item>
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
                        <List.Item href='/artistsComposers'>Artists and Composers</List.Item>
                        <List.Item href='/leadersPoliticians'>Leaders and Politicians</List.Item>
                        <List.Item href='/philoThinkers'>Philosophers and Thinkers</List.Item>
                        <List.Item href='/scientistsInventors'>Scientists and Inventors</List.Item>
                    </List.List>
                </List.Item>
                <br />
                <br />
                <List.Item>
                <div style={{ color: 'black', fontSize: '1.5em' }}>
                    Educational</div>
                    <List.List>
                        <List.Item href='/timelinesMaps'>Timelines and Maps</List.Item>
                        <List.Item href='/videosPodcasts'>Videos and Podcasts</List.Item>
                        <List.Item href='/booksArticles'>Books and Articles</List.Item>
                    </List.List>
                </List.Item>
            </List>
        </Grid.Column>
    </Grid>
)

export default ListExampleBulleted;