import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainJw from './pages/jaewoong/Main/Main';
import LoginJw from './pages/jaewoong/Login/Login';
import MainGw from './pages/gunwoong/Main/Main';
import LoginGw from './pages/gunwoong/Login/Login';
import MainMj from './pages/minjeong/Main/mainMj';
import LoginMj from './pages/minjeong/Login/loginMj';
import Nav from './components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/mainjw" element={<MainJw />} />
        <Route path="/loginjw" element={<LoginJw />} />
        <Route path="/mainmj" element={<MainMj />} />
        <Route path="/loginmj" element={<LoginMj />} />
        <Route path="/maingw" element={<MainGw />} />
        <Route path="/logingw" element={<LoginGw />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
