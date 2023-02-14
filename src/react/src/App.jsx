import React from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import LandingPage from './landing-page/LandingPage';
import MainMenu from './main-menu/MainMenu';
import MemoryGame from './memory-game/MemoryGame';
import Login from './login/Login';
import 'animate.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#85B6B1',
    },
    secondary: {
      main: '#FBA2A2',
    },
    background: {
      main: '#333333',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: 'background.main',
          position: 'relative',
          minHeight: '100vh',
          overflow: 'hidden',
          display: 'block',
        }}
        className="App"
      >
        <BrowserRouter basename="/webapp">
          <Navbar />
          <Box sx={{
            pt: '2rem',
            pb: '2rem',
          }}
          >
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="*" element={<LandingPage />} />
              <Route path="/signup" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/menu" element={<MainMenu />} />
              <Route path="/match/:cardSetId" element={<MemoryGame />} />
            </Routes>
          </Box>
          <Footer />
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
