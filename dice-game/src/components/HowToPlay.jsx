import styled from 'styled-components'

function HowToPlay() {
  return (
    <HowToPlayContainer>
        <h2>How to play dice game</h2>
        <ul>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>After clicking the dice, if selected number is equal to dice number you will get same point as dice </li>
            <li>If you get wrong guess then  2 point will be dedcuted </li>
        </ul>
    </HowToPlayContainer>
  )
}

export default HowToPlay

const HowToPlayContainer = styled.div`
    max-width: 800px;
    max-height: 300px;
    background-color: #FBF1F1;
    padding: 20px;
    ul {
        padding-top: 12px;
    }

`