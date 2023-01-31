import './App.scss';
import Header from './Components/Header.js';
import LoginPage from './Components/LoginPage';
import MainPage from './Components/MainPage.js';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);
  
  return (
    <div>
      <Header />
      {!isAuthenticated && <Navigate to="/login" />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;

