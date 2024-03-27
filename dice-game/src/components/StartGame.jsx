import styled from 'styled-components';

function StartGame({toggleGameStart}) {
    return (
        <Container>
            <div>
                <img src="/images/dices.png" alt="" />
            </div>
            <div className='content'>
                <h1>DICE GAME</h1>
                <Button onClick={toggleGameStart}>Play Now</Button>
            </div>
        </Container>
    )
}

export default StartGame

const Container = styled.div`
    max-width: 73.875rem;
    margin: auto;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: space-evenly;

    .content {
        text-align: right;
        h1 {
            font-size: 6rem;
            white-space: nowrap;
        }
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

