import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Home from './Components/routes/Home';
import About from './Components/routes/About';
import WebDesign from './Components/routes/WebDesign';
import SEO from './Components/routes/SEO';
import Services from './Components/routes/Services';
import Layout from './Components/Layout';
import Frontend from './Components/routes/Frontend';
import PHP from './Components/routes/PHP';
import Node from './Components/routes/Node';
import AboutWho from './Components/routes/AboutWho';
import OurValues from './Components/routes/OurValues';
import WebDev from './Components/routes/WebDev';
import USpage from './Components/Pages/Countries/US';
import ChinaPage from './Components/Pages/Countries/China';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="unitedstates"index element={<USpage />} />

          <Route path="china"index element={<ChinaPage />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="web-design" element={<WebDesign />} />
          <Route path="web-dev" element={<WebDev />} />
          <Route path="frontend" element={<Frontend />} />
          <Route path="node" element={<Node />} />
          <Route path="seo" element={<SEO />} />
          <Route path="php" element={<PHP />} />
          <Route path="who-we-are" element={<AboutWho />} />
          <Route path="our-values" element={<OurValues />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
