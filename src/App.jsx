import "./App.css";
import { useState } from "react";
function App() {
  const [activePlayer, setActivePlayer] = useState("Player-1");
  const [totalPoints, setTotalPoints] = useState([0, 0]);
  const [randomNumber, setRandomNumber] = useState(0);
  const [gamePoints, setGamePoints] = useState(0);
  function switchPlayer() {
    activePlayer === "Player-1"
      ? setActivePlayer("Player-2")
      : setActivePlayer("Player-1");
  }
  const randomNumberGenerator = () => {
    const number = Math.floor(Math.random() * 6 + 1);

    if (number === 1) {
      setGamePoints(0);
      setRandomNumber(number);
      switchPlayer();
    }
    if (number !== 1) {
      setGamePoints(gamePoints + number);
      setRandomNumber(number);
    }
  };
  const holdPoints = () => {
    if (activePlayer === "Player-1") {
      setTotalPoints([(totalPoints[0] += gamePoints), totalPoints[1]]);
    }
    if (activePlayer === "Player-2") {
      setTotalPoints([totalPoints[0], (totalPoints[1] += gamePoints)]);
    }
    if (totalPoints[0] >= 50) {
      alert("Player 1 wins!");
      setGamePoints(0);
      setRandomNumber(0);
      setTotalPoints([0, 0]);
    }
    if (totalPoints[1] >= 50) {
      alert("Player 2 wins!");
      setGamePoints(0);
      setRandomNumber(0);
      setTotalPoints([0, 0]);
    }
    switchPlayer();
    setGamePoints(0);
    setRandomNumber(0);
  };
  return (
    <>
      <h1>Pig Game</h1>
      <div className="main-board">
        <div
          className="player-1"
          style={{
            backgroundColor:
              activePlayer === "Player-1" ? "lightblue" : "white",
          }}
        >
          <h2>Player 1</h2>
          <p className="total-score">Total score:</p>
          <p className="total-points">{totalPoints[0]}</p>
        </div>
        <div
          className="player-2"
          style={{
            backgroundColor:
              activePlayer === "Player-2" ? "lightblue" : "white",
          }}
        >
          <h2>Player 2</h2>
          <p className="total-score">Total score:</p>
          <p className="total-points">{totalPoints[1]}</p>
        </div>
        <div className="random-number">
          <p className="random-number-text">Random number</p>
          <p className="generated-number">{randomNumber}</p>
        </div>
        <button className="btn" onClick={randomNumberGenerator}>
          Generate random number
        </button>
        <div className="total-game-points">
          <p className="game-points-text">Game points</p>
          <p className="game-points">{gamePoints}</p>
        </div>
        <button className="btn-hold" onClick={holdPoints}>
          Keep score
        </button>
      </div>
      <div className="game-instructions">
        <p>Instructions:</p>
        <ol>
          <li>
            Generate random number (between 1-6). Every time your number will be
            added to game points, however if random number is 1 than you loose
            all points and will be your opponent move.
          </li>
          <li>
            At any stage you can keep your game points, those will be added to
            your total score and will be your opponent turn.
          </li>
          <li>First player to reach total score of 50 wins the game.</li>
        </ol>
      </div>
    </>
  );
}

export default App;
