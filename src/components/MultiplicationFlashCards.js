import React, {Component} from "react";
import Multiplication from "./symbols/Multiplication";
import styled from 'styled-components'
import Flex from 'styled-flex-component'

const FlashCard = styled.div`
    width: 200px;
    margin: 0 auto;
    text-align: right;
`


const Number = styled.span`
    display: inline-block;
    font-size: 5.5rem;
    margin: 5px 15px;
`
const EqualsLine = styled.div`
    width: 100%;
    margin: 5px 0;
    height: 4px;
    border-radius: 2px;
    border: 1px solid #fff;
    background-color: #fff;
`

const Input = styled.input`
    background-color: transparent;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid #fff;
    width: 100%;
    font-size: 5.5rem;
    height: 6rem;
    text-align: right;
    color: #fff;
`

class MultiplicationFlashCards extends Component {
    state = {
        top: null,
        bottom: null,
        result: null,
        answerValue: '',
    }

    componentDidMount() {
        this.getNewNumbers()
    }
   
    getNewNumbers = () => {
        const {max} = this.props
        const top = this.getRandomInt(max)
        const bottom = this.getRandomInt(max)
        const result = top * bottom

        this.setState({
            top,
            bottom,
            result,
            answerValue: ''
        })
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        const { answerValue, result} = this.state

        if (answerValue == result) {
            console.log('correct')
        } else {
            console.log('incorrect')
        }

        this.getNewNumbers()
    }

    onAnswerChange = (e) => {
        this.setState({answerValue: e.target.value})
    }
    
    render() {

        return(
            <FlashCard>
                <Flex alignCenter justifyEnd>
                    <Number>{this.state.top}</Number>
                </Flex>
                <Flex alignCenter justifyBetween>
                    <Multiplication /> 
                    <Number>{this.state.bottom}</Number>
                </Flex>
                <EqualsLine />
                <form onSubmit={this.onFormSubmit}>
                    <Input type="number"  autoFocus onChange={this.onAnswerChange} value={this.state.answerValue}/>
                </form>
             </FlashCard>
        )
    }
}

export default MultiplicationFlashCards