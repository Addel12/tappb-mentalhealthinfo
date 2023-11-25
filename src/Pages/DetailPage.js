import React from 'react';
import { useLocation } from 'react-router-dom';
import './DetailPage.css'; // Import the CSS file

function DetailPage() {
    // Get the penyakitData from the location state
    const { state } = useLocation();
    const penyakitData = state && state.penyakitData;

    if (!penyakitData) {
        // Handle the case where penyakitData is not available
        return <div className="container">No movie data available.</div>;
    }

    return (
        <div className="container">
            <h1>{penyakitData.title}</h1>
            <img src={penyakitData.img} alt={penyakitData.title} className="detail-img" />
            <p className="detail-detail">Jenis: {penyakitData.jenis}</p>
            <p className="detail-detail"> {penyakitData.desc}</p>
        </div>
    );
}

export default DetailPage;
