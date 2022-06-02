import React, { useState } from 'react';
import './styles/App.css';
import DisplayCards from './Components/DisplayCards';
import Scoreboard from './Components/Scoreboard';

function App() {

  const handleLoss = () => {
    setScore(0);
    //check if high score
    //reset game
  }

  const [score, setScore] = useState(0);
  const addPoint = () => {
    setScore((prevScore) => prevScore + 1);
  }

  return (
    <div className="App">
      <Scoreboard score={score} highScore={10}/>
      <DisplayCards 
        passLoss={handleLoss}
        addPoint={addPoint}
        numCards={[
          {name: "mickey", img: "mickeyimg"}, 
          {name: "minnie", img: "minnieimg"},
          {name: "goofy", img: "goofyimg"},
          {name: "ThatGuy", img: "imgofthatguy"},
          {name: "Vecna", img: "spookyimgofVecna"}]}
      />
    </div>
  );
}

export default App;
