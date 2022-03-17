import { useState } from "react";

export default function Card({cards, titre, message, id}) {
    const [status, setStatus] = useState("A faire");

    const changeStatus = (e) => {
            if(e.target.checked){
                setStatus("Fait");
            }else {
                setStatus("A faire");
            }
    }
    const deleteCard = () => {
        setCards(
            cards.filter((card) => card.id !== id)
        )
    }

    return (
        <div className="card mb-5 mx-auto" style={{width: "400px"}}>
            <div className="card-body">
                {status}
                <h5 className="card-title">{titre}</h5>
                <p className="card-text">{message}</p>
                <input type="checkbox" id="chk1" value="done" onChange={changeStatus}/>
                <label htmlFor="chk1">Finito ? </label>
                <button class="btn btn-primar" onClick={deleteCard}>Supprimer</button>
            </div>
        </div>
    ) 
}