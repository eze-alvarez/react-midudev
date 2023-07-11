export const Square = ({children, index, updateBoard, isSelected, turn}) => {
    const className = `square ${isSelected ? "is-selected" :""}`;
  
    const handleClick = () => {
      console.log("estoy en el handleClick")  
      updateBoard(index)
        
    }
  
    console.log(`estoy en el Square, mi index es ${index} , children ${children} ,turn es ${turn}`)
  
    return (
      <div className={className} onClick={handleClick}>
        {children}
        
      </div>
    )
  }