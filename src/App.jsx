import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import CustomCursor from './components/ui/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import ProjectLakeside from './pages/ProjectLakeside';
import ProjectUrbanOffice from './pages/ProjectUrbanOffice';
import ProjectHeritage from './pages/ProjectHeritage';
import ProjectExpansion from './pages/ProjectExpansion';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project/lakeside-modern" element={<ProjectLakeside />} />
          <Route path="project/urban-office" element={<ProjectUrbanOffice />} />
          <Route path="project/heritage-restoration" element={<ProjectHeritage />} />
          <Route path="project/expansion" element={<ProjectExpansion />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
