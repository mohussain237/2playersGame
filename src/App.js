import "./App.css";
import React, { useState } from "react";

function App() {
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [result, setResult] =useState('')

  const reStart= ()=> {
    setPlayer1(0)
    setPlayer2(0)
    setResult('')
    
  }
  const start = () => {
    let health2;
    let health1;

    // ------ loop for the player1 ------ //
    for (let i = 0; i <= 100; i = i + Math.floor(Math.random() * 5 + 1)) {
      let h1 = 100;
      health1 = h1 - i;
      console.log(health1);
    }

    // ------- loop for player2 ------- //
    for (let j = 0; j <= 100; j = j + Math.floor(Math.random() * 5 + 1)) {
      let h2 = 100;
      health2 = h2 - j;
      console.log(health2);
    }
      // ------ conditions for the Game winning ------- //
    if (health1 === 0) {
      setPlayer2(player2 + 1);
    } else if (health2 === 0) {
      setPlayer1(player1 + 1);
    }

    if (player1 === 3) 
      setResult("****// PLAYER 1 Won this Game...!! //****");
    else if (player2 === 3) 
    setResult("****// PLAYER 2 Won this Game...!! //****");
    
  };
  return (
    <>
    <div className='game'>
    <p> Click on the 'Start' button and  play the game.... </p>
      <h1> Player1:- Won--{player1} </h1>
      <h1> Palyer2:- Won--{player2}</h1>
      <h3>  { result}</h3>
      <div className = 'btn'>
      <button className ='p1' onClick={start}> Start</button>
      <button className ='p2' onClick={reStart}> ReStart</button>
      </div>
    </div>


    </>
  );
}

export default App;
