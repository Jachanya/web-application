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
          <Route path="/web-application/restaurant" element={<RestLandPage />} />
          <Route path="/web-application/deliver" element={<DeliverLandPage />} />
          <Route path="/web-application/team" element={<TeamLandPage />} />
        </ Routes>
      </AnimatePresence>
  );
}

export default App;
