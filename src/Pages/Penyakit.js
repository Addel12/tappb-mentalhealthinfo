import { Fragment } from "react";
import { useNavigate } from 'react-router-dom'; 
import { useState, useEffect } from "react";
import axios from 'axios';  // Import axios
import CardSmall from "../component/Card/CardSmall";
import "./Penyakit.css";

export default function Penyakit() {
    const navigate = useNavigate();
    const [penyakit, setPenyakit] = useState([]); 

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/Addel12/penyakit/datapenyakit").then(res => {
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
                <h1>Penyakit Mental</h1>
                <h2>
                    Gangguan jiwa adalah gangguan yang memengaruhi suasana hati, pola pikir, dan perilaku seseorang secara umum. Kondisi ini biasanya berkaitan dengan masalah dalam fungsi sosial, pekerjaan, atau masalah keluarga
                </h2>
                <h1>Macam-macam Penyakit Mental</h1>
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
