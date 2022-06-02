import React, { useState } from 'react';
import './styles/App.css';
import DisplayCards from './Components/DisplayCards';

function App() {
  return (
    <div className="App">
      <DisplayCards numCards={[
        {name: "mickey", img: "mickeyimg"}, 
        {name: "minnie", img: "minnieimg"},
        {name: "goofy", img: "goofyimg"},
        {name: "ThatGuy", img: "imgofthatguy"},
        {name: "Vecna", img: "spookyimgofVecna"}]}/>
    </div>
  );
}

export default App;
