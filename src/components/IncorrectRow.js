import React from 'react'
import Flex from 'styled-flex-component'
import Multiplication from './symbols/Multiplication';

const IncorrectRow = ({answer: { top, bottom,  result, answerNumber }}) => {
    return (
        <Flex>
            <span>{top}</span>
            <Multiplication width={30}/> 
            <span>{bottom}</span>

        </Flex>
    )
}

export default IncorrectRow