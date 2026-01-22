import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import WeddingPage from './pages/WeddingPage';
import PartyPage from './pages/PartyPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hochzeit" element={<WeddingPage />} />
          <Route path="/party" element={<PartyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
