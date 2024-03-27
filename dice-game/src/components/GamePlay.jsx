import styled from 'styled-components'
import ScoreCard from './ScoreCard'
import NumberList from './NumberList'
import HowToPlay from './HowToPlay'
import RollDice from './RollDice'
import { useState } from 'react'

function GamePlay() {
    const [showRules, setShowRules] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const [totalScore, setTotalScore] = useState(0);
    const [numberOnDice, setNumberOnDice] = useState(1);
    const [error, setError] = useState('');

    const getRandomNumberOnDice = (min, max) => {
        return Math.ceil(Math.random() * (max - min)); 
    }

    const rollDice = () => {
        if(!selectedNumber) {
            setError('Please select a number from the list below before rolling the dice');
            return;
        }
        const randomNumber =  getRandomNumberOnDice(1,7);
        setNumberOnDice(randomNumber);
        if(selectedNumber === randomNumber) {
            setTotalScore(totalScore + randomNumber);
        } else {
            setTotalScore(totalScore - 2);
        }
        setSelectedNumber(undefined);
    }
    
    const resetScore = () => {
        setTotalScore(0);
    }
    return (
        <GameContainer>
            <HeaderContainer>
                <ScoreCard totalScore = {totalScore}/>
                <NumberList 
                selectedNumber={selectedNumber} 
                setSelectedNumber={setSelectedNumber}
                error = {error}
                setError = {setError}
                />
            </HeaderContainer>
            <BodyContainer>
                <RollDice 
                showRules = {showRules}
                setShowRules = {setShowRules}
                numberOnDice = {numberOnDice}
                rollDice = {rollDice}
                resetScore = {resetScore}
                />
                {showRules ? <HowToPlay /> :''}
            </BodyContainer>
        </GameContainer>
    )
}

export default GamePlay

const GameContainer = styled.main`
    max-width: 1280px;
    margin: auto;
`

const HeaderContainer = styled.div`
    padding-top: 60px;
    display: flex;
    justify-content: space-between;
`

const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`