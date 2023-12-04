import React from 'react';
import styled from 'styled-components';

// Define the grid container
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(17, 1fr); // 18 columns
  grid-template-rows: repeat(16, 1fr); // 18 rows, each row being 1 fraction of the container height
`;

// Define the info box
const InfoBox = styled.div`
  display: none;
  position: absolute;
  background-color: #fff;
  border: 1px solid #000;
  padding: 10px;
  width: 150px;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

const Name = styled.div`
font-weight: ${props => (props.isHovered ? 'bold' : 'normal')};
`;

// Define the individual grid box
const GridBoxStyled = styled.div`
  background-color: ${props => props.color || '#ddd'};
  border: 1px solid #2F2F2F;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-row: ${props => props.gridRow || 'auto'};
  grid-column: ${props => props.gridColumn || 'auto'};
  position: relative; // Added for absolute positioning of InfoBox

  &:hover {

    ${InfoBox} {
      display: block;
      background-color: #fff;
    }
  }
`;

const Examples = styled.div`
  font-weight: bold;
  color: ${props => props.color}; // use the color passed as a prop
`;

// Define the data for your grid items
const gridData = [
    // Red
    { name: 'Stalinism', gridColumn: '1 / 3', gridRow: '1 / 3', color: '#E57373', info: 'Highly authoritarian with extreme measures against opposition. Known for causing massive famines and executing millions.', examples: 'USSR' },
    { name: 'Anti-Revisionism', gridColumn: '1 / 3', gridRow: '3', color: '#E57373', info: 'Advocates for Stalinist principles and opposes changes to communist ideals. Supports maintaining a powerful state indefinitely.' },
    { name: 'Leninism', gridColumn: '1 / 3', gridRow: '4 / 6', color: '#E57373', info: 'Prelude to communism, advocating for a step-by-step guide to achieve a classless society. Involves a vanguard party to overthrow the old capitalist system and then hand control back to the people.' },
    { name: 'Trotskyism', gridColumn: '1', gridRow: '6 / 8', color: '#E57373', info: 'Similar to Orthodox Marxism but includes government action. Advocates for a revolution leading to a socialist society, then stepping back to achieve Orthodox Marxism.' },
    { name: 'Orthodox Marxism', gridColumn: '1 / 3', gridRow: '8', color: '#E57373', info: 'Adheres to the original ideas of Karl Marx. Advocates for a completely classless society and direct control of state affairs by the people.' },
    { name: 'Socialist Transhumanism', gridColumn: '2 / 4', gridRow: '6', color: '#E57373', info: 'Combines transhumanism (enhancing humans through technology) with socialist economics. Advocates for shared wealth to advance human capabilities through technology.' },
    { name: 'Agrarianism', gridColumn: '2 / 4', gridRow: '7', color: '#E57373', info: 'Advocates for equality among different people, often seen in farming communities. Emphasizes the importance of often overlooked groups like farmers in decision-making.' },
    { name: 'National Bolshevism', gridColumn: '3', gridRow: '1 / 3', color: '#E57373', info: 'Combines extreme nationalism with a permanent communist regime. Maintains racist and nationalist principles within a communist government structure.' },
    { name: 'Mugabeism', gridColumn: '3 / 6', gridRow: '3', color: '#E57373', info: 'Combines Marxist-Leninist economy with black nationalism and authoritarian military regime. Known for violent opposition to outsiders and strong government control.' },
    { name: 'Chavism', gridColumn: '3 / 5', gridRow: '4', color: '#E57373', info: 'Combines a controlling military state with large-scale socialism. Uses socialism to increase military power.' },
    { name: 'Conservative Socialism', gridColumn: '3 / 5', gridRow: '5', color: '#E57373', info: 'Socialist economy combined with conservative or traditional values. Requires a state for wealth redistribution and instilling family values.' },
    { name: 'Ho Chi Minh Thought', gridColumn: '4', gridRow: '6 / 8', color: '#E57373', info: 'Prioritizes the working class for defense and decision-making. Emphasizes the importance of the working class in national affairs.' },
    { name: 'Collectivism', gridColumn: '3', gridRow: '8', color: '#E57373', info: 'Believes the needs of the many outweigh the needs of the few. Advocates for shared wealth and community-centered economic beliefs.' },
    { name: 'Maoism', gridColumn: '4', gridRow: '1 / 2', color: '#E57373', info: 'Leninism with an emphasis on commoners leading the revolution. Known for extreme authoritarian measures and significant human rights violations.' },
    { name: 'Xi-ism', gridColumn: '4', gridRow: '2 / 3', color: '#E57373', info: 'Emphasizes state control, censorship, and the infallibility of the government. Strongly authoritarian with a focus on social control. Modern China.' },
    { name: 'Left Populism', gridColumn: '4', gridRow: '8', color: '#E57373', info: 'Anti-elitist, focusing on the workers or common people. Emphasizes supporting the "little guy" and condemning actions of the elite.' },
    { name: 'Strasserism', gridColumn: '5', gridRow: '1 / 3', color: '#E57373', info: 'Combines Nazism with complete public ownership of markets. Maintains racist principles and genocides of Nazism within a fully public market system.' },
    { name: 'Juche', gridColumn: '6 / 8', gridRow: '1 / 2', color: '#E57373', info: 'Emphasizes complete control over citizens\' lives by the government. Features a class system with a ruling class distributing resources to the working class. North Korean Ideology.' },
    { name: 'Left-Wing Nationalism', gridColumn: '6', gridRow: '2 / 4', color: '#E57373', info: 'Socialist or communal society that is isolated and defended against outsiders. Advocates for a leftist government that is protective of its social state.' },
    { name: 'Ba\'athism', gridColumn: '7 / 9', gridRow: '2', color: '#E57373', info: 'Arabian nationalism combined with public ownership and unity among Arabs. Emphasizes a vanguard party and doesn\'t dissolve after achieving goals.' },
    { name: 'Monarcho Communism', gridColumn: '7 / 9', gridRow: '3', color: '#E57373', info: 'Combines monarchy with communism. Features a born ruler overseeing a classless, communal society.' },
    { name: 'Eco-Fascisim', gridColumn: '8', gridRow: '1', color: '#E57373', info: 'Combines fascism with ecological focus. Advocates for a totalitarian state dedicated to ecological preservation.' },
    { name: 'Distributism', gridColumn: '5 / 7', gridRow: '8', color: '#E57373', info: 'Advocates for shared ownership of a nation\'s assets. Different from socialism; focuses on shared sources of capital rather than equal wealth distribution.' },
    { name: 'Laborism', gridColumn: '7 / 9', gridRow: '7 / 9', color: '#E57373', info: 'Prioritizes the working class in government. Those responsible for production should have a significant say in government.' },
    { name: 'Unionism', gridColumn: '5', gridRow: '7', color: '#E57373', info: 'Advocates for equality in power and opposes influences like lobbying in government. Supports equal representation for all groups in government decisions.' },
    { name: 'Social Nationalism', gridColumn: '6', gridRow: '7', color: '#E57373', info: 'Combines extreme left-wing (socialist) economic policies with extreme right-wing (nationalist) ideologies. Often racially motivated and economically supportive of the favored group.' },
    { name: 'Castroism', gridColumn: '5 / 8', gridRow: '6', color: '#E57373', info: 'Focuses on reducing private property for public interest and strong military unity. Not overly authoritarian against its own people but not progressive.' },
    { name: 'Christian Democracy', gridColumn: '8', gridRow: '6', color: '#E57373', info: 'Centrist ideology with left-leaning economic policies. Based on Christian principles, emphasizing social welfare funded by the state.' },
    { name: 'Titoism', gridColumn: '5', gridRow: '4', color: '#E57373', info: 'A less extreme version of USSR communism. Focuses on unity among workers and community members without extreme measures like gulags.' },
    { name: 'State Capitalism', gridColumn: '6 / 8', gridRow: '4', color: '#E57373', info: 'The state functions as a for-profit entity. Involves state-owned businesses and participation in public marketplaces.' },
    { name: 'Futurist', gridColumn: '8', gridRow: '4', color: '#E57373', info: 'Prioritizes technological advancement in healthcare, science, and robotics. Requires collective effort and funding, leaning towards authoritarian and left due to communal goals.' },
    { name: 'Dingism', gridColumn: '5', gridRow: '5', color: '#E57373', info: 'Modern ideology in Southeast Asia, combining socialism with capitalist elements. Features semi-free markets and private business within a socialist framework.' },
    { name: 'Social Gospel', gridColumn: '6', gridRow: '5', color: '#E57373', info: 'Early 1900s political movement, a foundation of the progressive movement. Challenged issues like racism and child labor based on biblical principles.' },
    { name: 'Technocracy', gridColumn: '7', gridRow: '5', color: '#E57373', info: 'Rule by those with technical expertise or the most qualified individuals. Advocates for a government led by the smartest or strongest individuals.' },
    { name: 'Kleptocracy', gridColumn: '8', gridRow: '5', color: '#E57373', info: 'Literally translates to "rule of thieves." Involves corrupt collectivism where government members accumulate and misuse public funds.' },

    // Green
    { name: 'Left Communism', gridColumn: '1 / 3', gridRow: '9 / 11', color: '#BDD7AD', info: 'Adheres to Marx\'s original ideas, advocating for a classless society without a powerful government. Focuses on worker-led communities sharing wealth without a dictatorial state.' },
    { name: 'Luxemburgism', gridColumn: '1 / 3', gridRow: '11', color: '#BDD7AD', info: 'Similar to Left Communism but with a focus on workers\' unions and modern social equality. Advocates for practical application of Left Communism principles.' },
    { name: 'Council Communism', gridColumn: '1 / 3', gridRow: '12', color: '#BDD7AD', info: 'Advocates for a small council to ensure no one else takes over power. Focuses on propaganda to unite people towards a common cause without a powerful state.' },
    { name: 'Classical Marxism', gridColumn: '1', gridRow: '13', color: '#BDD7AD', info: 'Advocates for opposition to the idols of capitalism and the promotion of a classless society. Emphasizes sharing wealth, with the government\'s role being to prevent corporate exploitation.' },
    { name: 'Libertarian Market Socialism', gridColumn: '1 / 3', gridRow: '14', color: '#BDD7AD', info: 'A more extreme version of Libertarian Socialism, focusing on trade-based markets without money. Emphasizes free trade between markets in a classless, stateless society.' },
    { name: 'Situationism', gridColumn: '1 / 3', gridRow: '15', color: '#BDD7AD', info: 'Opposes materialism and advocates for living within one\'s means. Critiques modern consumerism and promotes a lifestyle against wealth accumulation.' },
    { name: 'Anarcho-Communism', gridColumn: '1', gridRow: '16', color: '#BDD7AD', info: 'Envisions a stateless, classless, and ownerless society. Emphasizes a communal lifestyle with shared resources and no private ownership.' },
    { name: 'Ghandism', gridColumn: '2 / 4', gridRow: '13', color: '#BDD7AD', info: 'Advocates for self-reliance, spiritual and physical independence, and peaceful resistance to tyranny. Emphasizes helping each other and opposing government intervention in personal lives.' },
    { name: 'Accelerationism', gridColumn: '3 / 5', gridRow: '9', color: '#BDD7AD', info: 'Believes in accelerating the collapse of the current societal structure to advance to a desired future. Often targets capitalism, advocating for its destruction to hasten the transition to socialism.' },
    { name: 'Eco-Transhumanism', gridColumn: '5 / 7', gridRow: '9', color: '#BDD7AD', info: 'Combines ecological concerns with transhumanism. Advocates for advancing technology to help the ecosystem, including space travel to reduce Earth\'s population.' },
    { name: 'Progressivism', gridColumn: '7 / 9', gridRow: '9', color: '#BDD7AD', info: 'Focuses on making progress in technology, social, and economic areas for a collective goal.' },
    { name: 'Greenism', gridColumn: '3', gridRow: '10', color: '#BDD7AD', info: 'Prioritizes nature and ecology in decision-making. Advocates for government policies that protect the environment.' },
    { name: 'Social Democracy', gridColumn: '4 / 6', gridRow: '10', color: '#BDD7AD', info: 'Combines social or socialist policies with democratic processes. Emphasizes convincing people to vote for new policies rather than imposing them.' },
    { name: 'Liberal Democracy', gridColumn: '6', gridRow: '10', color: '#BDD7AD', info: 'Liberalism applied to a democratic government. Emphasizes individual protection in a system where individuals collectively make decisions.' },
    { name: 'Welfarism', gridColumn: '7 / 9', gridRow: '10', color: '#BDD7AD', info: 'Concerned with the consequences of actions, particularly on how they affect people. Focuses on humanitarian aspects of policies and their impact.' },
    { name: 'Democratic Socialism', gridColumn: '3 / 5', gridRow: '11', color: '#BDD7AD', info: 'Combines socialism with democratic principles. Leaders of the socialist country are elected by the workers and members of the country.' },
    { name: 'Syndicalism', gridColumn: '5 / 7', gridRow: '11', color: '#BDD7AD', info: 'Involves interconnected groups like farmers\' co-ops or workers\' unions. Focuses on trade and cooperation between these groups without strong government intervention.' },
    { name: 'Nordic Liberalism', gridColumn: '7 / 9', gridRow: '11', color: '#BDD7AD', info: 'Capitalism with a social safety net. Focuses on public sector jobs, private economy, and social systems for the poor and needy.' },
    { name: 'Democratic Confederalism', gridColumn: '3 / 5', gridRow: '12', color: '#BDD7AD', info: 'Decentralized groups or states pick who runs the connective government between them. The centralized state is weaker compared to more authoritarian systems.' },
    { name: 'Environmentalism', gridColumn: '5', gridRow: '12', color: '#BDD7AD', info: 'Views the environment as a limiting factor in decisions. Advocates for policies that protect the environment, even if it means imposing restrictions.' },
    { name: 'Market Socialism', gridColumn: '6', gridRow: '12', color: '#BDD7AD', info: 'Combines socialism with free markets. Features collectively owned groups operating in an open market.' },
    { name: 'Technological Primitivism', gridColumn: '7 / 9', gridRow: '12', color: '#BDD7AD', info: 'Advocates for technological advancement without societal regression. Supports the development of technology that does not negatively impact human behavior.' },
    { name: 'Mandelaism', gridColumn: '4 / 6', gridRow: '13', color: '#BDD7AD', info: 'Focuses on helping the poor and needy, based on Mandela\'s initiatives in South Africa. Combines liberal socialism with a particular emphasis on poverty alleviation and sustainable development.' },
    { name: 'Liberal Socialism', gridColumn: '6 / 8', gridRow: '13', color: '#BDD7AD', info: 'Advocates for a mixed economy with free market participation and wealth redistribution. Emphasizes social equality, liberty, and minimal government intervention in redistributing wealth.' },
    { name: 'Georgism', gridColumn: '8', gridRow: '13', color: '#BDD7AD', info: 'Aims to reduce government size by limiting taxation to land ownership, discouraging land hoarding. Balances capitalist and socialist ideas by reducing taxes while discouraging excessive land ownership.' },
    { name: 'Libertarian Socialism', gridColumn: '3 / 5', gridRow: '14', color: '#BDD7AD', info: 'Opposes wage slavery and advocates for a non-money-centered society. Supports trade over capitalism and minimal government intervention.' },
    { name: 'Anti-Authoritarianism', gridColumn: '5 / 7', gridRow: '14', color: '#BDD7AD', info: 'Advocates for unity against tyranny, regardless of specific political alignment. Emphasizes resistance to authoritarianism as a primary goal.' },
    { name: 'Geo-Libertarianism', gridColumn: '7 / 9', gridRow: '14', color: '#BDD7AD', info: 'Similar to Georgism, focusing on a single land tax. Emphasizes free markets and individuality, with less state involvement compared to Georgism.' },
    { name: 'Minarcho-Socialism', gridColumn: '3 / 6', gridRow: '15', color: '#BDD7AD', info: 'Features a minimal state, primarily to enforce the Non-Aggression Principle (NAP). Focuses on public parties handling economy and wealth distribution, not the state.' },
    { name: 'Religious Anarchism', gridColumn: '6 / 8', gridRow: '15', color: '#BDD7AD', info: 'Based on the belief that the state is a form of idolatry. Advocates for living according to religious principles without government intervention.' },
    { name: 'Anarcho-Pacifism', gridColumn: '8', gridRow: '15', color: '#BDD7AD', info: 'Opposes violence as a form of rule. Advocates for complete non-violence and resistance to any form of tyranny, including the state.' },
    { name: 'Eco-Anarchism', gridColumn: '2 / 4', gridRow: '16', color: '#BDD7AD', info: 'Advocates for the protection of nature by eliminating the state. Believes that true ecological preservation is impossible with government interference.' },
    { name: 'Anarcha-Feminism', gridColumn: '4 / 6', gridRow: '16', color: '#BDD7AD', info: 'Seeks to dismantle the state to overcome gender-based discrimination and inequality.' },
    { name: 'Anarcho-Collectivism', gridColumn: '6 / 8', gridRow: '16', color: '#BDD7AD', info: 'Involves worker-controlled groups managing their own economies. Opposes the idea of a state overseeing economic activities.' },
    { name: 'Anarcho-Mutualism', gridColumn: '8', gridRow: '16', color: '#BDD7AD', info: 'Advocates for a trade-based society without money. Features a completely free and open market with mutual trade agreements.' },

    // Blue
    { name: 'Esoteric Fascism', gridColumn: '10', gridRow: '1 / 3', color: '#A7C4E5', info: 'Similar to fascism but with a focus on spiritual or supernatural elements. Justifies ethnic pride through spiritual superiority.' },
    { name: 'Fascism', gridColumn: '9', gridRow: '1 / 3', color: '#A7C4E5', info: 'Extreme nationalism and sacrifice of individual control for the greater good. Involves a strong military enforcing standards and moral practices.' },
    { name: 'Nazism', gridColumn: '11', gridRow: '1 / 3', color: '#A7C4E5', info: 'A form of fascism with more active enforcement of its beliefs. Known for its extreme measures against perceived outsiders.' },
    { name: 'Neo-Nazism', gridColumn: '12', gridRow: '1', color: '#A7C4E5', info: 'An attempt to revive the core tenets of Nazism. More right-leaning due to its active approach to instituting a new government with Nazi beliefs.' },
    { name: 'Corporate Autocracy', gridColumn: '13 / 15', gridRow: '1', color: '#A7C4E5', info: 'A totalitarian government controlled entirely by corporations. Corporations own and operate essential government functions like the military and police.' },
    { name: 'Absolute Monarchism', gridColumn: '15 / 17', gridRow: '1', color: '#A7C4E5', info: 'The extreme form of a monarchy where the monarch has unlimited power. Justified often by divine right or birthright.' },
    { name: 'Imperialism', gridColumn: '15 / 17', gridRow: '2', color: '#A7C4E5', info: 'Involves taking resources from new areas and imposing one\'s way of life. Characterized by a strong military to carry out imperialistic goals.' },
    { name: 'Colonialism', gridColumn: '15 / 17', gridRow: '3', color: '#A7C4E5', info: 'Involves exploiting resources from new areas for profit. Colonial powers often stay and impose their way of life on the colonized areas.' },
    { name: 'Feudalism', gridColumn: '15 / 17', gridRow: '4', color: '#A7C4E5', info: 'Land-based class structure. Common in Medieval Europe. Emphasizes property ownership as a measure of worth in society.' },
    { name: 'Pinochetism', gridColumn: '16', gridRow: '5', color: '#A7C4E5', info: 'The doctrine under Pinochet\'s Chile. Known for extreme measures against opposition, including violence.' },
    { name: 'Traditional Conservatism', gridColumn: '15 / 17', gridRow: '6', color: '#A7C4E5', info: 'Focuses on enforcing traditional moral values and norms. More authoritarian due to its emphasis on government-mandated morality.' },
    { name: 'Neo-Conservatism', gridColumn: '15 / 17', gridRow: '7', color: '#A7C4E5', info: 'Advocates for spreading conservative principles globally through interventionism. Emerged around the Vietnam War era in the U.S.' },
    { name: 'Fiscal Conservatism', gridColumn: '15 / 17', gridRow: '8', color: '#A7C4E5', info: 'Emphasizes the idea that individuals should keep the wealth they generate. Advocates for government protection of personal wealth.' },
    { name: 'Conservatism', gridColumn: '13 / 15', gridRow: '8', color: '#A7C4E5', info: 'Aims to conserve existing structures and values like religious rights and property ownership. Requires a government to protect these rights.' },
    { name: 'Liberalism', gridColumn: '12', gridRow: '8', color: '#A7C4E5', info: 'Focuses on government-protected individuality and equality. Emphasizes the role of the state in protecting individual agency.' },
    { name: 'National Liberalism', gridColumn: '10 / 12', gridRow: '8', color: '#A7C4E5', info: 'Similar to Third Way but focuses on national self-interest. Social policies and healthcare are applied only within one\'s own nation.' },
    { name: 'Third Way', gridColumn: '9', gridRow: '8', color: '#A7C4E5', info: 'Combines right-wing capitalism (where people can keep their money) with left-wing social policies (like social programs). Emerged during Bill Clinton\'s Presidency.' },
    { name: 'Senatorialism', gridColumn: '9 / 11', gridRow: '7', color: '#A7C4E5', info: 'Advocates for a country run by a senate or a small group of elected people.', examples: 'Roman Republic' },
    { name: 'Constitutional Monarch', gridColumn: '11 / 13', gridRow: '7', color: '#A7C4E5', info: 'Involves a monarchy bound by specific rules. The monarch reigns but does not rule, having limited power.' },
    { name: 'Liberal Conservatism', gridColumn: '13', gridRow: '7', color: '#A7C4E5', info: 'Combines conservative tenets with a push towards law, order, and moral correction. Uses government to guide people down certain ideologies.' },
    { name: 'Zionism', gridColumn: '14', gridRow: '7', color: '#A7C4E5', info: 'Specific to Jewish people and their entitlement to the nation of Israel.' },
    { name: 'Progressive Conservatism', gridColumn: '9 / 11', gridRow: '6', color: '#A7C4E5', info: 'Developed as a response to slavery in the 1800s. Combines conservative governance with forceful progress in certain directions.' },
    { name: 'Kuomin tangism', gridColumn: '9', gridRow: '4 / 6', color: '#A7C4E5', info: 'Associated with a political party in Taiwan advocating for unification with China.' },
    { name: 'Vichy Fascism', gridColumn: '9', gridRow: '3', color: '#A7C4E5', info: 'Refers to French groups allied with Italy and Germany during World War II. Similar to fascism but with some level of alliance with other countries.' },
    { name: 'Islamist Theocracy', gridColumn: '10 / 12', gridRow: '3', color: '#A7C4E5', info: 'Government is meant to maintain Muslim values.' },
    { name: 'Christian Theocracy', gridColumn: '10 / 12', gridRow: '4', color: '#A7C4E5', info: 'Government is meant to maintain Christian values.' },
    { name: 'Confederalism', gridColumn: '10 / 12', gridRow: '5', color: '#A7C4E5', info: 'Emphasizes strong states or groups with more power than the central government. Often involves strong borders and a militarized government.' },
    { name: 'Elective Monarchism', gridColumn: '12 / 14', gridRow: '5', color: '#A7C4E5', info: 'Involves a monarchy where the monarch is elected, usually by a small group. Vatican City' },
    { name: 'Paleo Conservatism', gridColumn: '14 / 16', gridRow: '5', color: '#A7C4E5', info: 'Advocates for non-interventionism and isolationism. Opposes international aid and prefers minimal interaction with other countries.' },
    { name: 'Eco Conservatism', gridColumn: '11 / 13', gridRow: '6', color: '#A7C4E5', info: 'Involves government intervention to protect ecological areas.' },
    { name: 'Nationalist Conservatism', gridColumn: '13 / 15', gridRow: '6', color: '#A7C4E5', info: 'Focuses on preserving national values and identity. Involves a sense of national pride and government involvement in national betterment.' },
    { name: 'Hindu Theocracy', gridColumn: '12', gridRow: '4', color: '#A7C4E5', info: 'Government is meant to maintain Hindu values.' },
    { name: 'Buddhist Theocracy', gridColumn: '13 / 15', gridRow: '4', color: '#A7C4E5', info: 'Government is meant to maintain Buddhist values.' },
    { name: 'Aristocracy', gridColumn: '13 / 15', gridRow: '3', color: '#A7C4E5', info: 'Rule by a privileged few based on the belief that they are better suited to govern. Less centralized than absolute monarchism but still highly hierarchical.' },
    { name: 'Neo Fascism', gridColumn: '12', gridRow: '2 / 4', color: '#A7C4E5', info: 'Preserves core tenets of fascism, including ethnic superiority and strong nationalism. Emerged post-World War II.' },
    { name: 'Authoritarian Capitalism', gridColumn: '13 / 15', gridRow: '2', color: '#A7C4E5', info: 'Power and control in a country are based on who has the most money. Involves a strong government controlled by capitalists.' },


    // Yellow
    { name: 'Neo-Liberalism', gridColumn: '9 / 11', gridRow: '9', color: '#FAE6A3', info: 'An adaptation of liberalism with a heavier focus on freeing up businesses. Emphasizes reducing business regulations and promoting free-market principles.' },
    { name: 'General Capitalism', gridColumn: '11 / 13', gridRow: '9', color: '#FAE6A3', info: 'The basic concept of capitalism, involving private ownership and control of assets. Allows individuals to start businesses, generate wealth, and retain their earnings.' },
    { name: 'Capitalist Transhumanism', gridColumn: '13 / 15', gridRow: '9', color: '#FAE6A3', info: 'Combines capitalist principles with transhumanist goals. Advocates for using market-driven solutions to advance human enhancement technologies.' },
    { name: 'Conservative Libertarianism', gridColumn: '15 / 17', gridRow: '9', color: '#FAE6A3', info: 'Merges libertarian principles with conservative values. Emphasizes individual liberty, free markets, and traditional social norms.' },
    { name: 'Social Libertarianism', gridColumn: '9 / 11', gridRow: '10', color: '#FAE6A3', info: 'Combines libertarian market principles with a welfare state. Supports social programs within a framework of free markets and individual freedoms.' },
    { name: 'Transhumanism', gridColumn: '11 / 13', gridRow: '10 / 13', color: '#FAE6A3', info: 'Focuses on using technology to enhance the human condition beyond natural limitations. Advocates for the advancement of human capabilities through biomechanics and robotics.' },
    { name: 'Classical Libertarianism', gridColumn: '13 / 17', gridRow: '10', color: '#FAE6A3', info: 'Based on the original principles of libertarianism. Emphasizes individual rights, private property, and minimal government intervention.' },
    { name: 'Libertarianism', gridColumn: '9 / 11', gridRow: '11 / 13', color: '#FAE6A3', info: 'Advocates for autonomy and voluntary actions. Opposes forced state interventions, emphasizing individual rights and minimal government.' },
    { name: 'Paleo Libertarianism', gridColumn: '13 / 15', gridRow: '12 / 14', color: '#FAE6A3', info: 'A more conservative form of libertarianism, emphasizing traditional values. Advocates for free markets and individual liberties while maintaining cultural conservatism.' },
    { name: 'National Libertarianism', gridColumn: '15 / 17', gridRow: '12 / 14', color: '#FAE6A3', info: 'Combines libertarian principles with a focus on national sovereignty and interests. Advocates for minimal government while prioritizing national identity and values.' },
    { name: 'Liberal Corporatism', gridColumn: '13 / 15', gridRow: '11', color: '#FAE6A3', info: 'Advocates for a partnership between the government, businesses, and society. Focuses on collaboration for economic stability and growth within a liberal framework.' },
    { name: 'Democratic Liberalism', gridColumn: '15 / 17', gridRow: '11', color: '#FAE6A3', info: 'Combines democratic principles with liberal values. Emphasizes individual freedoms, democratic governance, and the rule of law.' },
    { name: 'Right Georgism', gridColumn: '9', gridRow: '13', color: '#FAE6A3', info: 'A right-leaning interpretation of Georgism. Focuses on land value tax and free markets, with minimal other government intervention.' },
    { name: 'Techno Liberalism', gridColumn: '9', gridRow: '14', color: '#FAE6A3', info: 'Advocates for embracing technology within a liberal political framework. Emphasizes the role of technology in advancing individual freedoms and societal progress.' },
    { name: 'Eco-Capitalism', gridColumn: '9', gridRow: '15', color: '#FAE6A3', info: 'Combines environmental concerns with capitalist economics. Advocates for using market mechanisms to address environmental issues.' },
    { name: 'Agorism', gridColumn: '9', gridRow: '16', color: '#FAE6A3', info: 'Advocates for the creation of a society through voluntary exchanges outside of government control. Emphasizes counter-economics and non-violent revolution to achieve a free society.' },
    { name: 'Green Libertarianism', gridColumn: '10 / 13', gridRow: '13', color: '#FAE6A3', info: 'Merges libertarian principles with environmentalism. Advocates for individual liberties and free markets while emphasizing environmental responsibility.' },
    { name: 'Neoclassical Liberalism', gridColumn: '10 / 12', gridRow: '14', color: '#FAE6A3', info: 'A modern interpretation of classical liberalism. Emphasizes free markets, individual rights, and limited government.' },
    { name: 'Neo Libertarianism', gridColumn: '12 / 14', gridRow: '14', color: '#FAE6A3', info: 'A contemporary form of libertarianism. Combines traditional libertarian principles with modern perspectives on societal issues.' },
    { name: 'Objectivism', gridColumn: '14', gridRow: '14', color: '#FAE6A3', info: 'Emphasizes rational self-interest and individualism. Opposes collectivism and altruism, advocating for laissez-faire capitalism.' },
    { name: 'Minarchism', gridColumn: '15 / 17', gridRow: '14', color: '#FAE6A3', info: 'Supports a minimal state limited to protecting individual rights. Advocates for the smallest possible government necessary to maintain basic functions like defense and law enforcement.' },
    { name: 'Christian Libertarianism', gridColumn: '15 / 17', gridRow: '15', color: '#FAE6A3', info: 'Merges libertarian principles with Christian values. Advocates for individual freedoms and minimal government, guided by Christian ethics.' },
    { name: 'Anarcho-Capitalism', gridColumn: '15 / 17', gridRow: '16', color: '#FAE6A3', info: 'Advocates for the elimination of the state in favor of a free market. Believes in voluntary transactions and private property without government intervention.' },
    { name: 'Hoppenism', gridColumn: '14', gridRow: '16', color: '#FAE6A3', info: 'Combines libertarianism with a critique of democracy. Advocates for a natural order based on private property and voluntary interactions.' },
    { name: 'Voluntaryism', gridColumn: '12 / 14', gridRow: '16', color: '#FAE6A3', info: 'Believes all forms of human association should be voluntary. Opposes the use of force and advocates for non-coercive methods in social interactions.' },
    { name: 'Individualist Ararchism', gridColumn: '10/ 12', gridRow: '16', color: '#FAE6A3', info: 'Advocates for a society based on voluntary associations and individual sovereignty. Opposes all forms of coercive authority, including the state.' },
    { name: 'Anarcho-Monarchism', gridColumn: '10', gridRow: '15', color: '#FAE6A3', info: 'A paradoxical ideology combining anarchism with a symbolic or ceremonial monarchy. Envisions a voluntary, non-coercive societal structure under a figurehead monarch.' },
    { name: 'Consequentialism', gridColumn: '11 / 13', gridRow: '15', color: '#FAE6A3', info: 'A philosophy that evaluates actions based on their outcomes or consequences. In a libertarian context, it emphasizes the results of individual freedoms and market mechanisms.' },
    { name: 'Pink Capitalism', gridColumn: '13 / 15', gridRow: '15', color: '#FAE6A3', info: 'Refers to the incorporation of LGBTQ+ movements and identities into capitalist systems. Advocates for LGBTQ+ rights and representation within a capitalist framework.' },
];

// GridBox component
const GridBox = ({ data }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
        <GridBoxStyled
            {...data}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Name isHovered={isHovered}>{data.name}</Name>
            <InfoBox>
                {data.info}
                <Examples color={data.color}>{data.examples}</Examples>
            </InfoBox>
        </GridBoxStyled>
    );
};

// Main component
const PoliticalGrid = () => {
    return (
        <GridContainer>
            {gridData.map((item, index) => (
                <GridBox key={index} data={item} />
            ))}
        </GridContainer>
    );
};

export default PoliticalGrid;