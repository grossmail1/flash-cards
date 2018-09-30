import React, { Component } from 'react';
import Flex from 'styled-flex-component'
import styled from 'styled-components';

import FlashCards from './FlashCards';
import Timer from './Timer'
import Start from './Start'

const Container = styled.section`
  max-width: 980px;
  margin: 0 auto;
  padding: 0 10px;
`
const H1 = styled.h1`
  font-size: 2.5rem;
`

class App extends Component {
  state = {
    max: 0,
    time: 0,
    showState: "START",
    correct: [],
    incorrect: []
  }

  onCorrect = (answer) => {
    console.log("correct")
    this.setState({correct: [...this.state.correct, answer]})
  }

  onIncorrect = (answer) => {
    console.log("incorrect")
    this.setState({incorrect: [...this.state.incorrect, answer]})
  }

  onStart = (max) => {
    this.setState({max, showState: "CARDS"})
    this.startTimer()
  }

  startTimer = () => {
    const interval = 100
    this.timer = setInterval(() => {
      const { time } = this.state
      time < 60000 ? this.setState({time: this.state.time + interval}) : clearInterval(this.timer)
    }, interval)
  }

  render() {
    const {showState, max, time} = this.state

    return (
      <Container>
        <Flex alignCenter justifyBetween>
        <H1>Flash Cards</H1>
        {showState === "CARDS" && 
        <Timer time={time} />
        }
        </Flex>
        {showState === "START" && 
          <Start onStart={this.onStart}/>
        }
        {showState === "CARDS" && 
          <FlashCards max={max} onCorrect={this.onCorrect} onIncorrect={this.onIncorrect}/>
        }

      </Container>
    );
  }
}

export default App;

