import React from 'react'
import IncorrectRow from './IncorrectRow';
import Flex from 'styled-flex-component'

import {H2, H3} from './common/Typography'

const getCorrectPercent = (numberCorrect, numberIncorrect) => {
    const total =  numberCorrect + numberIncorrect
    const num = (numberCorrect / total) * 100
    return Math.round(num * 100) / 100
}


const Results = ({correct, incorrect}) => {

    const correctPercent = getCorrectPercent(correct.length, incorrect.length)

    return (
        <Flex column center>
            <H2>All Done!</H2>
            <H3>You got <b>{correct.length}</b> answers correct at <b>{correctPercent}%</b></H3>
            
            {incorrect.length > 0 &&
                <div>
                    <H3>Incorrect Answers</H3>
                    {incorrect.map((answer, i) => <IncorrectRow answer={answer} key={i}/>)}
                </div>
            }
  
        </Flex>
    )
}

export default Results