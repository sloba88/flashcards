import "./App.css";
import { Routes, Route, BrowserRouter as Router, } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Placeholder = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [term, setTerm] = useState('');
  const [definition, setDefinitin] = useState('');

  useEffect(() => {
    fetch('/api/flashcards').then(async (resp) => {
      const flashcardsReturned = await resp.json();
      console.log(flashcardsReturned.data)
      setFlashcards(flashcardsReturned.data)
    })
  }, []);

  const addFlashcard = async () => {

    const data = {
      term: term,
      definition: definition
    }

    const resp = await fetch('/api/flashcards', { method: "POST", body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });

    flashcards.push(resp.data)
  }


  const createFlashCardsForm = (
    <form onSubmit={addFlashcard}>
      <label>Term: <input type="text" value={term} onChange={e => setTerm(e.target.value)} /></label><br />
      <label>Definition: <input type="text" value={definition} onChange={e => setDefinitin(e.target.value)} /></label><br />
      <input type="submit" value="Submit"></input>
    </form>
  )

  return <div>
    {flashcards.length ? flashcards.map((flashcard) => {
      return <div className="card">
        <p>{flashcard.term}</p>
        <p>{flashcard.definition}</p>
      </div>
    }) : (
      <div>No flashcards</div>
    )}
    <div>
      {createFlashCardsForm}
    </div>
  </div>

};

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/flashcards" element={<Placeholder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
