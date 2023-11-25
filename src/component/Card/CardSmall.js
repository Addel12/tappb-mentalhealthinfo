import "./CardSmall.css";

export default function CardSmall({ title, jenis, img, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <img src={img} alt="" className="photo" />
            <div className="description">
                <div>
                    <p id="title">{title}</p>
                    <p id="jenis">{jenis}</p>
                </div>
            </div>
        </div>
    );
}



