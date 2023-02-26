import './App.scss';
import Header from './Components/Header.js';
import LoginPage from './Components/LoginPage';
import MainPage from './Components/MainPage.js';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const currentUser = useSelector((state) => state.authReducer.currentUser);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);
  
  return (
    <div style={currentUser.language === 'he' ? {direction: 'rtl'} : {direction: 'ltr'}}>
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

