import './App.css';
import React, { useState } from 'react';
import Card from './Component/Card';
import Form from './Component/Form';

function App() {

  const [cards,  setCards] = useState([ 
    {
      titre : "Titre 1",
      message : "Message 1",
      id : 1,
      isDone: true
    },
    {
      titre : "Titre 2",
      message : "Message 2",
      id : 2,
      isDone: false
    },
    {
      titre : "Titre 3",
      message : "Message 3",
      id : 3,
      isDone: true
    }
  ]);

  return (
    <div className="container my-5">
      <Form setCards={setCards} cards={cards}/>
      {cards.map((card) => (
        <Card cards={cards} image={card.image} titre={card.titre} message={card.message} key={card.id} isDone={card.isDone} setCards={setCards}/>
      ))}
    </div>
    
  );
}

export default App;
