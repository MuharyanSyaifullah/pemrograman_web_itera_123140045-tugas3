import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
// Nanti kita akan buat halaman Stats
// import Stats from './pages/Stats/Stats'; 
import './App.css'; // Kita buat CSS sederhana untuk App

function App() {
  return (
    <div className="app-container">
      {/* Navigasi Multi-Halaman */}
      <nav className="navbar">
        <h2>Manajemen Buku Pribadi</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          {/* <Link to="/stats">Statistik</Link> */}
        </div>
      </nav>

      {/* Konten Halaman akan di-render di sini */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/stats" element={<Stats />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;