import React from 'react'
import IncorrectRow from './IncorrectRow';

const getCorrectPercent = (numberCorrect, numberIncorrect) => {
    const total =  numberCorrect + numberIncorrect
    const num = (numberCorrect / total) * 100
    return Math.round(num * 100) / 100
}
const Results = ({correct, incorrect}) => {

    const correctPercent = getCorrectPercent(correct.length, incorrect.length)

    return (
        <div>
            <h2>All Done!</h2>
            <h3>Heres how you did</h3>
            <h4>You got {correctPercent}% correct</h4>

            <div>
                <h3>Incorrect Answers</h3>
                {incorrect.map((answer, i) => <IncorrectRow answer={answer} key={i}/>)}
            </div>
        </div>
    )
}

export default Results