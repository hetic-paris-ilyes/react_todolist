import React, { useEffect, useState } from "react";
export default function Card({cards, titre, message, isDone, id, setCards}) {

    const changeStatus = (e) => {
            if(e.target.checked){
                isDone =true;
            }else {
                isDone = false;
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
                {isDone ? "Fait" : "pas fait"}
                <h5 className="card-title">{titre}</h5>
                <p className="card-text">{message}</p>
                <input type="checkbox" id="chk1" value="done" onChange={changeStatus}/>
                <label htmlFor="chk1">Finito ? </label>
                <button class="btn btn-primar" onClick={deleteCard}>Supprimer</button>
            </div>
        </div>
    ) 
}