import React, { Component } from 'react';
import Flex from 'styled-flex-component'
import styled from 'styled-components';

import FlashCards from './FlashCards';
import Timer from './Timer'
import Start from './Start'
import Results from './Results'
import { H1 } from './common/Typography'

const Container = styled.section`
  max-width: 980px;
  margin: 0 auto;
  padding: 0 10px;
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
      time < 6000 ? this.setState({time: this.state.time + interval}) : this.onTimerFinish()
    }, interval)
  }

  onTimerFinish = () => {
    clearInterval(this.timer)
    this.setState({showState: "RESULTS"})
  }

  render() {
    const {showState, max, time, correct, incorrect} = this.state

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
        {showState === "RESULTS" && 
          <Results correct={correct} incorrect={incorrect}/>
        }
      </Container>
    );
  }
}

export default App;

