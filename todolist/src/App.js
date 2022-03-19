import './App.css';
import React, { useState } from 'react';
import Card from './Component/Card';
import Form from './Component/Form';

function App() {

  const [cards,  setCards] = useState([ 
    {
      titre : "Titre 1",
      message : "Message 1",
      id : 1
    },
    {
      titre : "Titre 2",
      message : "Message 2",
      id : 2
    },
    {
      titre : "Titre 3",
      message : "Message 3",
      id : 3
    }
  ]);

  return (
    <div className="container my-5">
      <Form setCards={setCards}/>
      {cards.map((card) => (
        <Card cards={cards} image={card.image} titre={card.titre} message={card.message} key={card.id} setCards={setCards}/>
      ))}
    </div>
    
  );
}

export default App;
