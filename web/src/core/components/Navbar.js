import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";
import { ROUTES } from '../constants';
import Logo from '../../BlueLogo.PNG';
//import ToggleSwitch from './ToggleSwitch';

const NavLink = styled(Link)`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 7px;
  color: navy;
  text-decoration: none;
  transition: color 0.2s ease-out, background-color 0.2s ease-out;
  border-radius: 3px;
  border: 1px solid white;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -3px;
    width: 0;
    height: 1px;
    background-color: navy;
    transition: width 0.3s ease-out;
  }

  &:hover:after {
    width: 100%;
  }
  
  ${({ selected }) => selected && css`
    &:after {
      width: 100%;
    }
    background-color: navy;
    color: white;
  `}
`;


const Logoimg = styled.img`
  display: flex;
  justify-content: center;
  width: 4%;
  height: 7%;
  position: absolute;
  left: 20px;
  margin-top: 8px;
  margin-down: 20px;
`;

const NavbarContainer = styled.div`
  background-color: transparent;
  width: 35%;
  padding: 22px 10px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 55%;
`;


export const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState(ROUTES.HOME_PATH);
  //const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setSelectedTab(currentPath);
  }, []);

  const handleTabClick = (path) => {
    setSelectedTab(path);
  };

  //const toggleTheme = () => {
  //  setDarkMode(!darkMode);
  //};

  return (
    <div>
      <Logoimg src={Logo} />
      <NavbarContainer>
        <NavLink to={ROUTES.HOME_PATH} onClick={() => handleTabClick(ROUTES.HOME_PATH)} style={selectedTab === ROUTES.HOME_PATH ? { backgroundColor: 'navy', color: 'white' } : {}}>
          HOME
        </NavLink>
        <NavLink to={ROUTES.SOTD_PATH} onClick={() => handleTabClick(ROUTES.SOTD_PATH)} style={selectedTab === ROUTES.SOTD_PATH ? { backgroundColor: 'navy', color: 'white' } : {}}>
          SOTD
        </NavLink>
        <NavLink to={ROUTES.ABOUT_PATH} onClick={() => handleTabClick(ROUTES.ABOUT_PATH)} style={selectedTab === ROUTES.ABOUT_PATH ? { backgroundColor: 'navy', color: 'white' } : {}}>
          ABOUT
        </NavLink>
        <NavLink to={ROUTES.CONTACT_PATH} onClick={() => handleTabClick(ROUTES.CONTACT_PATH)} style={selectedTab === ROUTES.CONTACT_PATH ? { backgroundColor: 'navy', color: 'white' } : {}}>
          CONTACT
        </NavLink>
        {/* <ToggleSwitch darkMode={darkMode} toggleTheme={toggleTheme} /> */}
      </NavbarContainer>
    </div>
  );
};

