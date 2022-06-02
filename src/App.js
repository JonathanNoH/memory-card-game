import React, { useEffect, useState } from 'react';
import './styles/App.css';
import DisplayCards from './Components/DisplayCards';
import Scoreboard from './Components/Scoreboard';

function App() {
  //levels
  const levelOne = [
    {name: "mickey", img: "mickeyimg"}, 
    {name: "minnie", img: "minnieimg"},
    {name: "goofy", img: "goofyimg"},
    {name: "ThatGuy", img: "imgofthatguy"},
    {name: "Vecna", img: "spookyimgofVecna"}
  ]
  const levelTwo = [
    {name: "mickey", img: "mickeyimg"}, 
    {name: "minnie", img: "minnieimg"},
    {name: "goofy", img: "goofyimg"},
    {name: "ThatGuy", img: "imgofthatguy"},
    {name: "Vecna", img: "spookyimgofVecna"},
    {name: "Tristan", img: "tristanimg"},
  ]
  const levels = [levelOne, levelTwo];
  const [currentLevel, setCurrentLevel] = useState(0);
  //score states
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  //add 1 to score function
  const addPoint = () => {
    setScore((prevScore) => prevScore + 1);
  }
  const handleLoss = () => {
    setScore(0);
    setCurrentLevel(0);
  }
  const handleWin = () => {
    console.log("woohoo");
    setCurrentLevel(currentLevel + 1);
  }
  //check for win
  useEffect(() => {
    let winningScore = 0;
    for (let i = 0; i < currentLevel + 1; i++) {
      winningScore += levels[i].length;
    }
    if (score >= winningScore) {
      handleWin();
    }
  })
  //update high score effect
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  return (
    <div className="App">
      <Scoreboard score={score} highScore={highScore}/>
      {currentLevel === 0 &&
        <DisplayCards 
          passLoss={handleLoss}
          addPoint={addPoint}
          currentCards={levels[0]}
        />
      }
      {currentLevel === 1 &&
        <DisplayCards
          passLoss={handleLoss}
          addPoint={addPoint}
          currentCards={levels[1]}
        />
      }
    </div>
  );
}

export default App;
