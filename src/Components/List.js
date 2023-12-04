import React from 'react'
import { Grid, List } from 'semantic-ui-react'

const ListExampleBulleted = () => (
    <Grid columns={4}>
        <Grid.Column>
            <List bulleted>
                <List.Item href='/chronological'>
                <div style={{ color: 'black', fontSize: '1.5em' }}>
                    Chronological</div>
                    <List.List>
                        <List.Item href='/prehistoric' style={{ color: 'black', fontWeight: 'bold' }}>
                            Prehistoric</List.Item>
                        <List.List >
                            <List.Item style={{ color: 'black'}} href='/paleolithic'>Paleolithic</List.Item>
                            <List.Item style={{ color: 'black'}} href='/mesolithic'>Mesolithic</List.Item>
                            <List.Item style={{ color: 'black'}} href='/neolithic'>Neolithic</List.Item>
                        </List.List><br />
                        <List.Item href='/ancientHistory' style={{ color: 'black', fontWeight: 'bold' }}>
                            Ancient History</List.Item>
                        <List.List>
                            <List.Item style={{ color: 'black'}} href='/earlycivilizations'>Early Civilizations</List.Item>
                            <List.Item style={{ color: 'black'}} href='/classicalAntiquity'>Classical Antiquity</List.Item>
                        </List.List><br />
                        <List.Item href='/medievalHistory' style={{ color: 'black', fontWeight: 'bold' }}>
                            Medieval History</List.Item>
                        <List.List>
                            <List.Item style={{ color: 'black'}} href='/earlyMiddleAges'>Early Middle Ages</List.Item>
                            <List.Item style={{ color: 'black'}} href='/highMiddleAges'>High Middle Ages</List.Item>
                            <List.Item style={{ color: 'black'}} href='/lateMiddleAges'>Late Middle Ages</List.Item>
                        </List.List><br />
                        <List.Item href='/modernHistory' style={{ color: 'black', fontWeight: 'bold' }}>
                            Modern History</List.Item>
                        <List.List>
                            <List.Item style={{ color: 'black'}} href='/earlyModernPeriod'>Early Modern</List.Item>
                            <List.Item style={{ color: 'black'}} href='/lateModernPeriod'>Late Modern</List.Item>
                        </List.List><br />
                        <List.Item href='/contemporaryHistory' style={{ color: 'black', fontWeight: 'bold' }}>
                            Contemporary History</List.Item>
                        <List.List>
                            <List.Item style={{ color: 'black'}} href='/20thCentury'>20th Century</List.Item>
                            <List.Item style={{ color: 'black'}} href='/21stCentury'>21st Century</List.Item>
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
                        <List.Item style={{ color: 'black'}} href='/africa'>Africa</List.Item>
                        <List.Item style={{ color: 'black'}} href='/asia'>Asia</List.Item>
                        <List.Item style={{ color: 'black'}} href='/europe'>Europe</List.Item>
                        <List.Item style={{ color: 'black'}} href='/northAmerica'>North America</List.Item>
                        <List.Item style={{ color: 'black'}} href='southAmerica'>South America</List.Item>
                        <List.Item style={{ color: 'black'}} href='oceana'>Oceana</List.Item>
                        <List.Item style={{ color: 'black'}} href='polarRegions'>Polar Regions</List.Item>
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
                            <List.Item style={{ color: 'black'}} href='/artLiteratureMusic'>Art, Literature, Music</List.Item>
                            <List.Item style={{ color: 'black'}} href='/dailyLifeCustoms'>Daily Life and Customs</List.Item>
                            <List.Item style={{ color: 'black'}} href='/philosophy'>Philosophy</List.Item>
                            <List.Item style={{ color: 'black'}} href='/religionBeliefs'>Religion and Beliefs</List.Item>
                        </List.List><br />
                        <List.Item href='economic' style={{ color: 'black', fontWeight: 'bold' }}>
                            Economic</List.Item>
                        <List.List>
                            <List.Item style={{ color: 'black'}} href='/theoriesSystems'>Economic Theories and Systems</List.Item>
                            <List.Item style={{ color: 'black'}} href='/industrialDevelopments'>Industrial Developments</List.Item>
                            <List.Item style={{ color: 'black'}} href='/tradeCommerce'>Trade and Commerce</List.Item>
                        </List.List><br />
                        <List.Item href='/environmental' style={{ color: 'black', fontWeight: 'bold' }}>
                            Environmental</List.Item>
                        <List.List>
                            <List.Item style={{ color: 'black'}} href='/climateGeography'>Climate and Geography</List.Item>
                            <List.Item style={{ color: 'black'}} href='/humanImpact'>Human Impact</List.Item>
                            <List.Item style={{ color: 'black'}} href='/naturallDisasters'>Natural Disasters</List.Item>
                        </List.List><br />
                        <List.Item href='/political' style={{ color: 'black', fontWeight: 'bold' }}>
                            Political</List.Item>
                        <List.List>
                            <List.Item style={{ color: 'black'}} href='/empiresKingdoms'>Empires and Kingdoms</List.Item>
                            <List.Item style={{ color: 'black'}} href='/treatiesDiplomacy'>Treaties and Diplomacy</List.Item>
                            <List.Item style={{ color: 'black'}} href='/warsConflicts'>Wars and Conflicts</List.Item>
                        </List.List><br />
                        <List.Item href='/scienceTech' style={{ color: 'black', fontWeight: 'bold' }}>
                            Scientific</List.Item>
                        <List.List>
                            <List.Item style={{ color: 'black'}} href='/historyMath'>History of Math</List.Item>
                            <List.Item style={{ color: 'black'}} href='/inventionsDiscoveries'>Inventions and Discoveries</List.Item>
                            <List.Item style={{ color: 'black'}} href='/scientificMovements'>Scientific Movements</List.Item>
                            <List.Item style={{ color: 'black'}} href='/technologicalAdvancements'>Technological Advancements</List.Item>
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
                        <List.Item style={{ color: 'black'}} href='/artistsComposers'>Artists and Composers</List.Item>
                        <List.Item style={{ color: 'black'}} href='/leadersPoliticians'>Leaders and Politicians</List.Item>
                        <List.Item style={{ color: 'black'}} href='/philoThinkers'>Philosophers and Thinkers</List.Item>
                        <List.Item style={{ color: 'black'}} href='/scientistsInventors'>Scientists and Inventors</List.Item>
                    </List.List>
                </List.Item>
                <br />
                <br />
                <List.Item>
                <div style={{ color: 'black', fontSize: '1.5em' }}>
                    Educational</div>
                    <List.List>
                        <List.Item style={{ color: 'black'}} href='/timelinesMaps'>Timelines and Maps</List.Item>
                        <List.Item style={{ color: 'black'}} href='/videosPodcasts'>Videos and Podcasts</List.Item>
                        <List.Item style={{ color: 'black'}} href='/booksArticles'>Books and Articles</List.Item>
                    </List.List>
                </List.Item>
            </List>
        </Grid.Column>
    </Grid>
)

export default ListExampleBulleted;