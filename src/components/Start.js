import React, { Component } from "react"
import styled from 'styled-components'


const Wrapper = styled.div`
    width: 200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InputWrapper = styled.form`
    margin-bottom: 25px;
`

const Label = styled.label`
    margin-bottom: 4px;
    display: inline-block;
    font-size: 1.5rem;
`

const Input = styled.input`
    width: 100%;
    border: 1px solid #fff;
    border-radius: 5px;
    background-color: transparent;
    font-size: 2rem;
    padding: 5px 0 5px 15px;
    color: #fff;
    box-sizing: border-box;
`

const Button = styled.button`
    color: #fff;
    box-sizing: border-box;
    width: 100%;
    border: 2px solid #fff;
    border-radius: 5px;
    background-color: transparent;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 10px 15px;
    cursor: pointer;
`

class Start extends Component {
    state = {
        maxValue: ''
    }

    onMaxChange = e => {
        this.setState({
            maxValue: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        
        this.props.onStart(parseInt(this.state.maxValue, 10))
    }

    render() {
        return (
            <Wrapper onSubmit={this.onSubmit}>
                <InputWrapper>
                    <Label>Max Number</Label>
                    <Input value={this.state.maxValue} onChange={this.onMaxChange} type="number" />
                </InputWrapper>

                <Button type="submit">Get Started!</Button>
            </Wrapper>
        )
    }
}

export default Start