import React, { Component } from 'react';
import styled from 'styled-components';
import FlashCards from './FlashCards';

const Container = styled.section`
  max-width: 980px;
  margin: 0 auto;
  padding: 0 10px;
`
class App extends Component {
  state = {
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

  render() {
    return (
      <Container>
        <h1>Flash Cards</h1>
        <FlashCards max={12} onCorrect={this.onCorrect} onIncorrect={this.onIncorrect}/>
      </Container>
    );
  }
}

export default App;
