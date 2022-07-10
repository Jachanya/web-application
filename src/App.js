import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import LandingPage from './pages/LandingPage';
import RestLandPage from './pages/RestLandPage';
import DeliverLandPage from './pages/DeliverLandPage';
import TeamLandPage from './pages/TeamLandPage';

function App() {
  const location = useLocation();
  return (
      <AnimatePresence exitBeforeEnter>
        <Routes Key={location.pathname} location={location}>
          <Route path="/web-application" element={<LandingPage />}>
          </Route>
          <Route path="/restaurant" element={<RestLandPage />} />
          <Route path="/deliver" element={<DeliverLandPage />} />
          <Route path="/team" element={<TeamLandPage />} />
        </ Routes>
      </AnimatePresence>
  );
}

export default App;
