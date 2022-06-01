import React, { useState } from 'react';
import './styles/App.css';
import Card from './Components/Card';
import DisplayCards from './Components/DisplayCards';

function App() {
  return (
    <div className="App">
      <Card></Card>
      <DisplayCards numCards={[
        {name: "mickey", img: "mickeyimg"}, 
        {name: "minnie", img: "minnieimg"}]}/>
    </div>
  );
}

export default App;
