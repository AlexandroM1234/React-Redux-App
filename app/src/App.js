import React from "react";
import "./App.css";
import CharacterList from "./components/characterList";
import CharacterForm from "./components/characterForm";
function App() {
  return (
    <div className="App">
      <CharacterForm />
      <CharacterList />
    </div>
  );
}

export default App;
