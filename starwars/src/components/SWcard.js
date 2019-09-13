import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 450px;
    height: 250px;
    background: papayawhip;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 18px;
    padding: 12px;
`;


const SWcard = props => {
    return(
        <Wrapper>
            <h1>Name: {props.info.name}</h1>
            <h5>Gender: {props.info.gender}</h5>
            <h5>Height: {props.info.height}</h5>
            <h5>Hair Color:{props.info.hair_color}</h5>
            <h5>Eye Color:{props.info.eye_color}</h5>
        </Wrapper>
    )
}
export default SWcard;