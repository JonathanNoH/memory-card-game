import React, { useEffect, useState } from 'react';
import './styles/App.css';
import DisplayCards from './Components/DisplayCards';
import Scoreboard from './Components/Scoreboard';

function App() {

  const handleLoss = () => {
    setScore(0);
    //check if high score
    //reset game
  }
  const handleWin = () => {
    console.log("woohoo");
  }

  const [score, setScore] = useState(0);
  const addPoint = () => {
    setScore((prevScore) => prevScore + 1);
  }

  useEffect(() => {
    if (score === levelOne.length) {
      handleWin();
    }
  })

  const levelOne = [
    {name: "mickey", img: "mickeyimg"}, 
    {name: "minnie", img: "minnieimg"},
    {name: "goofy", img: "goofyimg"},
    {name: "ThatGuy", img: "imgofthatguy"},
    {name: "Vecna", img: "spookyimgofVecna"}
  ]

  return (
    <div className="App">
      <Scoreboard score={score} highScore={10}/>
      <DisplayCards 
        passLoss={handleLoss}
        addPoint={addPoint}
        numCards={levelOne}
      />
    </div>
  );
}

export default App;
