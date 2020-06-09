import React from 'react';
import './css/App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'

function App() {
  const isLogged = useSelector(state => state.isLogged)

  return (
    <div className="App">
      {isLogged ? 
          <Dashboard />
        : <Login />}
    </div>
  );
}

export default App;
