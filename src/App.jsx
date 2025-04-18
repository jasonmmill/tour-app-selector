import React, { useState } from 'react';
import Gallery from './components/Gallery';
import Destination from './components/Destination';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [selectedTour, setSelectedTour] = useState('All');

  const filteredCards =
    selectedTour === 'All'
      ? cards
      : cards.filter((card) => card.name === selectedTour);

  return (
    <div className="App">
      <h1>Tour Selector</h1>
      <Destination
        tours={cards}
        selectedTour={selectedTour}
        setSelectedTour={setSelectedTour}
      />
      <Gallery cards={filteredCards} setCards={setCards} onRemove={(id) => setCards(cards.filter((card) => card.id !== id))} />
    </div>
  );
}

export default App;