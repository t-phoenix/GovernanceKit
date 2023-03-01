import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { Home } from './pages';
import Home from './pages/Home.js'
import CreateDAO from './pages/CreateDAO';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>


      <div className="content">
        <Navbar />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-dao" element={<CreateDAO />} />
          </Routes>
        
      </div>

    </div>
  );
}

export default App;
