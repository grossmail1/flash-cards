import React, { Component } from 'react';
import styled from 'styled-components';
import MultiplicationFlashCards from './MultiplicationFlashCards';

const Container = styled.section`
  max-width: 980px;
  margin: 0 auto;
`
class App extends Component {
  render() {
    return (
      <Container>
        <h1>Flash Cards</h1>
        <MultiplicationFlashCards max={12}/>
      </Container>
    );
  }
}

export default App;
