import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './core';
import { Home, SOTD, About, Contact } from './modules';
import { Navbar } from './core/components/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Routes>
        <Route path={ROUTES.HOME_PATH} element={<Home />} />
        <Route path={ROUTES.SOTD_PATH} element={<SOTD />} />
        <Route path={ROUTES.ABOUT_PATH} element={<About />} />
        <Route path={ROUTES.CONTACT_PATH} element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
