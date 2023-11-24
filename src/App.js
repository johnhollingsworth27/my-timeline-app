import React from 'react';
import './CSS/global.css'; // Import your global CSS here
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Layout from './Navbar/Layout';
import ArtistsComposers from './Components/Pages/Biographical/ArtistsComposers';
import LeadersPoliticians from './Components/Pages/Biographical/LeadersPoliticians';
import ScientistsInventors from './Components/Pages/Biographical/ScientistsInventors';
import PhilosophersThinkers from './Components/Pages/Biographical/PhilosophersThinkers';
import ClassicalAntiquity from './Components/Pages/Chronological/Ancient/ClassicalAntiquity';
import EarlyCivilizations from './Components/Pages/Chronological/Ancient/EarlyCivilizations';
import TwentiethCentury from './Components/Pages/Chronological/Contemporary/TwentiethCentury';
import TwentyFirstCentury from './Components/Pages/Chronological/Contemporary/TwentyFirstCentury';
import EarlyMiddleAges from './Components/Pages/Chronological/Medieval/EarlyMiddleAges';
import HighMiddleAges from './Components/Pages/Chronological/Medieval/HighMiddleAges';
import LateMiddleAges from './Components/Pages/Chronological/Medieval/LateMiddleAges';
import EarlyModern from './Components/Pages/Chronological/Modern/EarlyModern';
import LateModern from './Components/Pages/Chronological/Modern/LateModern';
import Mesolithic from './Components/Pages/Chronological/Prehistoric/Mesolithic';
import Neolithic from './Components/Pages/Chronological/Prehistoric/Neolithic';
import Paleolithic from './Components/Pages/Chronological/Prehistoric/Paleolithic';
import BooksArticles from './Components/Pages/Educational/BooksArticles';
import TimelinesMaps from './Components/Pages/Educational/TimelinesMaps';
import VideosPodcasts from './Components/Pages/Educational/VideosPodcasts';
import Africa from './Components/Pages/Geographical/Africa';
import Asia from './Components/Pages/Geographical/Asia';
import NorthAmerica from './Components/Pages/Geographical/NorthAmerica';
import SouthAmerica from './Components/Pages/Geographical/SouthAmerica';
import Oceana from './Components/Pages/Geographical/Oceana';
import PolarRegions from './Components/Pages/Geographical/PolarRegions';
import ArtLitMusic from './Components/Pages/Thematic/Cultural/ArtLitMusic';
import EconomicTheories from './Components/Pages/Thematic/Economic/EconomicTheories';
import TradeCommerce from './Components/Pages/Thematic/Economic/TradeCommerce';
import IndustrialDev from './Components/Pages/Thematic/Economic/IndustrialDev';
import ClimateGeography from './Components/Pages/Thematic/Environmental/ClimateGeography';
import HumanImpact from './Components/Pages/Thematic/Environmental/HumanImpact';
import NaturalDisasters from './Components/Pages/Thematic/Environmental/NaturalDisasters';
import EmpiresKingdoms from './Components/Pages/Thematic/Political/EmpiresKingdoms';
import TreatiesDiplomacy from './Components/Pages/Thematic/Political/TreatiesDiplomacy';
import WarsConflicts from './Components/Pages/Thematic/Political/WarsConflicts';
import InventionsDiscoveries from './Components/Pages/Thematic/Scientific/InventionsDiscoveries';
import ScientificMovements from './Components/Pages/Thematic/Scientific/ScientificMovements';
import Technological from './Components/Pages/Thematic/Scientific/Technological';
import DailyLifeCustoms from './Components/Pages/Thematic/Cultural/DailyLifeCustoms';
import ReligionBeliefs from './Components/Pages/Thematic/Cultural/ReligionBeliefs';
import Europe from './Components/Pages/Geographical/Europe';
import Philosophy from './Components/Pages/Thematic/Cultural/Philosophy';
import HistoryMath from './Components/Pages/Thematic/Scientific/HistoryMath';
import Footer from './Components/Footer';
const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="*" element={<p>Not found!</p>} />
          <Route path="artistsComposers" index element={<ArtistsComposers />} />
          <Route path="leadersPoliticians" index element={<LeadersPoliticians />} />
          <Route path="scientistsInventors" index element={<ScientistsInventors />} />
          <Route path="philoThinkers" index element={<PhilosophersThinkers />} />

          <Route path="classicalAntiquity" index element={<ClassicalAntiquity />} />
          <Route path="earlyCivilizations" index element={<EarlyCivilizations />} />
          <Route path="earlyCivilizations" index element={<EarlyCivilizations />} />
          <Route path="twentiethCentury" index element={<TwentiethCentury />} />
          <Route path="twentyFirstCentury" index element={<TwentyFirstCentury />} />

          <Route path="earlyMiddleAges" index element={<EarlyMiddleAges />} />
          <Route path="highMiddleAges" index element={<HighMiddleAges />} />
          <Route path="lateMiddleAges" index element={<LateMiddleAges />} />

          <Route path="earlyModernPeriod" index element={<EarlyModern />} />
          <Route path="lateModernPeriod" index element={<LateModern />} />

          <Route path="mesolithic" index element={<Mesolithic />} />
          <Route path="neolithic" index element={<Neolithic />} />
          <Route path="paleolithic" index element={<Paleolithic />} />

          <Route path="booksArticles" index element={<BooksArticles />} />
          <Route path="timelinesMaps" index element={<TimelinesMaps />} />
          <Route path="videosPodcasts" index element={<VideosPodcasts />} />

          <Route path="africa" index element={<Africa />} />
          <Route path="asia" index element={<Asia />} />
          <Route path="europe" index element={<Europe />} />
          <Route path="northAmerica" index element={<NorthAmerica />} />
          <Route path="southAmerica" index element={<SouthAmerica />} />
          <Route path="oceana" index element={<Oceana />} />
          <Route path="polarRegions" index element={<PolarRegions />} />

          <Route path="artLiteratureMusic" index element={<ArtLitMusic />} />
          <Route path="dailyLifeCustoms" index element={<DailyLifeCustoms />} />
          <Route path="religionBeliefs" index element={<ReligionBeliefs />} />
          <Route path="philosophy" index element={<Philosophy />} />

          <Route path="theoriesSystems" index element={<EconomicTheories />} />
          <Route path="tradeCommerce" index element={<TradeCommerce />} />
          <Route path="industrialDevelopments" index element={<IndustrialDev />} />

          <Route path="climateGeography" index element={<ClimateGeography />} />
          <Route path="humanImpact" index element={<HumanImpact />} />
          <Route path="naturalDisasters" index element={<NaturalDisasters />} />

          <Route path="empiresKingdoms" index element={<EmpiresKingdoms />} />
          <Route path="treatiesDiplomacy" index element={<TreatiesDiplomacy />} />
          <Route path="warsConflicts" index element={<WarsConflicts />} />

          <Route path="inventionsDiscoveries" index element={<InventionsDiscoveries />} />
          <Route path="scientificMovements" index element={<ScientificMovements />} />
          <Route path="technologicalAdvancements" index element={<Technological />} />
          <Route path="historyMath" index element={<HistoryMath />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
