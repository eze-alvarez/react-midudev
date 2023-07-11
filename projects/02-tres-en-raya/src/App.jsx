import { useState } from 'react'
import confetti from "canvas-confetti"
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { check_winner, check_end_game } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameStorage, resetGameStorage } from './logic/storage/index.js'


function App() {
  
  const [board, setBoard] = useState(()=>{
    let boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    let turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? turnFromStorage : TURNS.X
  })
  const [winner, setWinner] = useState(null)

  

  const updateBoard = (index) => {
    //evito doble click en misma casilla
      if(board[index] || winner) return 

      //actualizo el tablero
      const newBoard = [...board]
      newBoard[index] = turn;
      setBoard(newBoard)

      //cambio el turno
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)

      //guardo board y turno
      saveGameStorage(newBoard, newTurn)
      //compruebo si gano alguien
      const newWinner = check_winner(newBoard)
      if(newWinner){ 
        confetti()
        setWinner(turn)
      }
      
      else if(check_end_game(newBoard)){
        setWinner(false)
      }
      
      console.log(`estoy en el UpdateBoard, el nuevo turn es ${turn} y nuevo board ${board}`)
  }

  

  function resetGame(){
    setTurn(TURNS.X)
    setBoard(Array(9).fill(null));
    setWinner(null)
    resetGameStorage()
  }

  console.log("estoy en la App")

  return (
    <>
      <main className="board">
        <button onClick={() => resetGame()}>Jugar de nuevo</button>
        <h1>tres en raya</h1>
        <section className="game">
        {board.map((square,index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              turn={turn}
            >
              {square}
            </Square>
          )
        })}
        </section>
        <section className="turn">
            <Square isSelected = {turn===TURNS.X}>{TURNS.X}</Square>
            <Square isSelected = {turn===TURNS.O}>{TURNS.O}</Square>
        </section>
        <WinnerModal winner={winner} resetGame={resetGame}/>   
       
      </main>    
    </>
  )
}

export default App
