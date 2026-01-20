import { useState } from 'react';
import HomePage from './pages/HomePage';
import WeddingPage from './pages/WeddingPage';
import PartyPage from './pages/PartyPage';

type PageType = 'home' | 'wedding' | 'party';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
      {currentPage === 'wedding' && <WeddingPage onNavigate={navigateTo} />}
      {currentPage === 'party' && <PartyPage onNavigate={navigateTo} />}
    </div>
  );
}

export default App;
