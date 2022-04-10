import React from 'react';
import styled from 'styled-components';
import Pin from './Pin';
import './MainBoard.css';

function MainBoard({ pins }) {
    return (
        <Wrapper>
            <Container className="mainboard-container">
                {pins.map((pin) => {
                    let {urls} = pin;
                    return <Pin key={pins.index} urls={urls} />
                })}
            </Container>
        </Wrapper>
    )
}

export default MainBoard

const Wrapper = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 15px;
    justify-content: center;
`

const Container = styled.div`
    background-color: #fff;
    colums-gap: 5px;
    margin: 0 auto;
    height: 100%;
`