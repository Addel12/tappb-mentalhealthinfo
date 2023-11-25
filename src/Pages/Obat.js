import { Fragment } from "react";
import { useNavigate } from 'react-router-dom'; 
import { useState, useEffect } from "react";
import axios from 'axios';  // Import axios
import CardSmall from "../component/Card/CardSmall";
import "./Obat.css";

export default function Obat() {
    const navigate = useNavigate();
    const [penyakit, setPenyakit] = useState([]); 

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/Addel12/obat/dataobat").then(res => {
            console.log(res.data);
            setPenyakit(res?.data ?? []);
        })
    }, [])

    // Create a function to navigate to the DetailPage with the selected movie data
    const navigateToDetailPage = (item) => {
        navigate(`/Penyakit/detail/${item.id}`, { state: { penyakitData: item } });
    };

    return (
        <>
            <div>
                <h1>
                    
                </h1>
                <h1>Obat-Obat Jiwa(Psikofarmaka)</h1>
                <h2>
                Psikotrofarmaka adalah zat atau obat, baik alamiah maupun sintetis bukan narkotika, yang berkhasiat psikoatif melalui pangaruh selektif pada susunan saraf pusat yang menyebabkan perubahan khas pada aktivitas mental dan perilaku.
                </h2>
                <h1>

                </h1>
            </div>

            <div className="rowcoba">
                <div className="column">
                    {penyakit.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall
                                title={item.title}
                                img={item.img}
                                jenis={item.jenis}
                                onClick={() => navigateToDetailPage(item)} 
                            />
                            {penyakit.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
            </div>

            <footer>
                footer
            </footer>
        </>
    );
}
