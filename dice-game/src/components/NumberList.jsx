import { useState } from 'react';
import styled from 'styled-components'

function NumberList({selectedNumber, setSelectedNumber, error, setError}) {
    const numList = [1, 2, 3, 4, 5, 6];
    const setDiceNumber = (val) => {
        setSelectedNumber(val);
        setError('')
    }
    return (
        <NumberListContainer>
            <p className='error'>{error}</p>
            <NumberListBox>
            {
                numList.map((val, i) => {
                   return <NumberBox
                   isSelected = {val === selectedNumber} 
                   key={i}
                   onClick={() => setDiceNumber(val)}
                   >
                    {val}
                   </NumberBox>
                })
            }
            </NumberListBox>
            <p>Select Number</p>
        </NumberListContainer>
        
    )
}

export default NumberList

const NumberListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 12px;
    font-weight: 500;
    .error {
        color: red;
    }
`
const NumberListBox = styled.div`
    display: flex;
    gap: 24px;
`

const NumberBox = styled.div`
    height: 72px;
    width: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    cursor: pointer;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
`