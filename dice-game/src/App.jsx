import { useState } from 'react';
import './App.css';
import GamePlay from './components/GamePlay';
import StartGame from "./components/StartGame"

function App() {
  const [isGameToggle, setGameToggle] = useState(false);

  const toggleGameStart = () => {
    setGameToggle(!isGameToggle);
  }
  return (
   <>
    {isGameToggle ? <GamePlay /> : <StartGame toggleGameStart = {toggleGameStart}/> }
   </>
  )
}

export default App
