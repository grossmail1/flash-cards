import React, { Component } from 'react';
import styled from 'styled-components';
import FlashCards from './FlashCards';
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
    console.log("start clicked", max)
    this.setState({max, showState: "CARDS"})
  }

  render() {
    const {showState, max} = this.state

    return (
      <Container>
        <H1>Flash Cards</H1>
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
