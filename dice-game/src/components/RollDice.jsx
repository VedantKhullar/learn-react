import styled from 'styled-components'
function RollDice({showRules, setShowRules, numberOnDice, rollDice, resetScore}) {
    
    
  return (
        <RollDiceContainer>
            <div className='dice' onClick={rollDice}>
                <img src={`/images/dice_${numberOnDice}.png`} alt="dice_1" />
            </div>
            <p>Click the Dice to roll</p>
            <Button onClick={resetScore}>Reset Score</Button>
            <Button onClick={() => setShowRules(!showRules)}>{!showRules ? 'Show': 'Hide'} Rules</Button>
        </RollDiceContainer>
  )
}

export default RollDice

const RollDiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: center;
    .dice {
        cursor: pointer;
    }
`

const Button = styled.button`
    min-width: 13.75rem;
    background-color: black;
    color: white;
    border: 0.0625rem solid transparent;
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: white;
        color: black;
        border: 0.0625rem solid black;
    }
`