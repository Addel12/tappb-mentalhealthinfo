// ProfileDetail.js

import React from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";

const profileData = [
  {
    nama: "Addellia Devianti",
    nim: "21120121130076",
    bio: "Adalah seseorang yang berharap bisa masuk Psikologi malah oleng ke Teknik, mana Teknik Komputer lagi, yang sama sekali nggak kepikiran akan ngoding seperti ini",
    fotoUrl: "https://avatars.githubusercontent.com/u/102005412?v=4",
  },
];

function ProfileDetail() {
  const { id } = useParams();
  const profile = profileData[id];

  if (!profile) {
    return <p>Profile not found</p>;
  }

  return (
    <div>
      <h1>Profile Detail</h1>
      <div className="profile-card">
        <img src={profile.fotoUrl} alt={profile.nama} />
        <h3>{profile.nama}</h3>
        <p>{profile.nim}</p>
        <p>{profile.bio}</p>

      </div>
    </div>
  );
}

export default ProfileDetail;
