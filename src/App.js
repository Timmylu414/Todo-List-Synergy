import Navbar from './components/Navbar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Day from './Pages/Day';
import Group from './Pages/Group';

function App() {
  const [showNav, setShowNav] = useState(true);
  return (
    <>
      <BrowserRouter>
        <header>
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
          <big>SYNERGY</big>
        </header>
        <Navbar show={showNav} />
        <div className='main'>
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/Day' element={<Day />} />
            <Route path='/About' element={<About />} />
            <Route path='/Group' element={<Group />} />
          </Routes>

        </div>

      </BrowserRouter>

    </>
  );
}

export default App;
