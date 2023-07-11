import { WINNER_COMBOS } from "../constants"

export const check_winner = (boardToCheck) => {
    for(const combo of WINNER_COMBOS){
        const [a,b,c] = combo
        if(boardToCheck[a] &&
            boardToCheck[a] ===  boardToCheck[b] &&
            boardToCheck[b] ===  boardToCheck[c]
          ){
            return  boardToCheck[a]
          }
    }
    return null 
}

export function check_end_game(newBoard){
  return newBoard.every(square => square!==null)
}