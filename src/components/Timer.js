import React from 'react'
import styled from 'styled-components'

const Time = styled.div`
font-size: 1.25rem;
font-weight: 400;
`

const Timer = ({time}) => {
    return (
        <Time>
            {time/1000}
        </Time>
    )
}

export default Timer