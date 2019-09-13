import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 350px;
    height: 600px;
    background: papayawhip;
    border: 1px solid black;
    border-radius: 5px;

`;


const SWcard = props => {
    return(
        <Wrapper>
            <h1>name</h1>
            <h5>gender</h5>
            <h5>height</h5>
            <h5>hair color</h5>
            <h5>eye color</h5>
        </Wrapper>
    )
}
export default SWcard;