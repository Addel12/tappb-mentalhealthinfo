import React from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdGroup } from "react-icons/md";
import { FaBook, } from "react-icons/fa"; 
import "./App.css";
import Penyakit from "./Pages/Penyakit";
import Profile from "./Pages/Profile";
import Obat from "./Pages/Obat";
import DetailPage from "./Pages/DetailPage";
import ProfileDetail from "./Pages/ProfileDetail";

document.addEventListener('DOMContentLoaded', function() {
  const backButton = document.createElement('button');
  backButton.textContent = 'Kembali';
  
  backButton.style.position = 'absolute';
  backButton.style.top = '0';
  backButton.style.left = '0';
  backButton.style.margin = '10px';

  backButton.addEventListener('click', function() {
    window.history.back();
  });

  document.body.appendChild(backButton);
});

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Mental 
        
        Healthy Info</p>
      </header>
      <body>
      <Routes>
        <Route path="/" element={<Navigate to="/Penyakit" replace />} />
        <Route path="/Penyakit" element={<Penyakit />} />
        <Route path="/Obat" element={<Obat />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Penyakit/detail/:id" element={<DetailPage />} />
        <Route path="/profiledetail/:id" element={<ProfileDetail />} />
      </Routes>
      </body>
      <footer>
        <Link to="/Penyakit" className="iconWrapper">
          <HiHome className="icon" />
          Penyakit
        </Link>
        <Link to="/Obat" className="iconWrapper">
          <FaBook className="icon" /> 
          Drug
        </Link>
        <Link to="/Profile" className="iconWrapper">
          <MdGroup className="icon" />
          Profile
        </Link>
      </footer>
    </BrowserRouter>
  );
}

export default App;
