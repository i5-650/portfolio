import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header.tsx'
import { Route, Routes } from 'react-router-dom';
import { Box } from "@mui/material";
import Home from './views/Home.tsx';

export default function App() {
  return (
    <>
      <Header />
      <Box sx={{ mx: 2, mt: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </>
  );
}

