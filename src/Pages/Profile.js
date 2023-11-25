// ProfilePage.js

import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

const profileData = [
  {
    nama: "Addellia Devianti",
    nim: "21120121130076",
    fotoUrl: "https://avatars.githubusercontent.com/u/102005412?v=4",
  },
];

function Profile() {
  return (
    <div>
      <h1>Profile Pengguna</h1>
      <div className="profile-cards">
        {profileData.map((data, index) => (
          <Link to={`/profiledetail/${index}`} key={index}>
            <div className="profile-card">
              <img src={data.fotoUrl} alt={data.nama} />
              <h3>{data.nama}</h3>
              <p>{data.nim}</p>
              <p>{data.genre}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Profile;
