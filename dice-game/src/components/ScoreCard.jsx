import styled from 'styled-components'

function ScoreCard({totalScore}) {
  return (
    <ScoreContainer>
        <div className='score'>
            {totalScore}
        </div>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default ScoreCard

const ScoreContainer = styled.div`
    font-weight: 500;
    font-size: 24px;
    line-height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 200px;
    .score {
        font-size: 100px;
    }
`

