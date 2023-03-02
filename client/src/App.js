import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js'
import TokenScreen from './pages/TokenScreen';
import TokenDetails from './pages/TokenDetails';
import CreateToken from './pages/CreateToken';
import CrowdsaleScreen from './pages/CrowdsaleScreen';
import CrowdsaleDetails from './pages/CrowdsaleDetails';
import CreateCrowdsale from './pages/CreateCrowdsale';
import DAOScreen from './pages/DAOScreen';
import DAODetails from './pages/DAODetails';
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
            <Route path="/token" element={<TokenScreen />}/>
            <Route path="/create-token" element={<CreateToken/>}/>
            <Route path="/token-details/:id" element={<TokenDetails/>}/>
            <Route path="/crowdsale" element={<CrowdsaleScreen />}/>
            <Route path="/crowdsale-details/:id" element={<CrowdsaleDetails />} />
            <Route path='/create-crowdsale' element={<CreateCrowdsale />} />
            <Route path="/dao" element={<DAOScreen />} />
            <Route path="/dao-details/:id" element={<DAODetails />}/>
            <Route path="/create-dao" element={<CreateDAO />}/>
          </Routes>
        
      </div>

    </div>
  );
}

export default App;
