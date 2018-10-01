import React from 'react'
import styled from 'styled-components'
import Multiplication from './symbols/Multiplication';
import Equals from './symbols/Equals';


const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid #fff;
`

const Number = styled.span`
    font-size: 2.5rem;
    margin: 0 5px;
`

const Wrong = Number.extend`
    text-decoration: line-through;
    color: #C20000;
`

const Correct = Number.extend`
    color: #22C400;
`

const IncorrectRow = ({answer: { top, bottom,  result, answerNumber }}) => {
    return (
        <Row>
            <Number>{top}</Number>
            <Multiplication width={25}/> 
            <Number>{bottom}</Number>
            <Equals width={25}/> 
            <Wrong>{answerNumber}</Wrong>
            <Correct>{result}</Correct>
        </Row>
    )
}

export default IncorrectRow