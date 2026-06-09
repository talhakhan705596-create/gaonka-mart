import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import Dashboard from './pages/Home/Dashboard';
import TALHAAI from './pages/AI/TALHAAI';
import Complaints from './pages/Complaints/Complaints';
import Education from './pages/Education/Education';
import Health from './pages/Health/Health';
import Agriculture from './pages/Agriculture/Agriculture';
import Jobs from './pages/Jobs/Jobs';
import News from './pages/News/News';
import Events from './pages/Events/Events';
import Profile from './pages/Profile/Profile';
import Admin from './pages/Admin/Admin';
import Marketplace from './pages/Marketplace/Marketplace';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg-deep pb-24">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ai" element={<TALHAAI />} />
          <Route path="/education" element={<Education />} />
          <Route path="/health" element={<Health />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
