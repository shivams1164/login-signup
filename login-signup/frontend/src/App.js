import logo from './logo.svg';
import './App.css';
import { Navigate, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route   path="/" element={<Navigate to = "/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
