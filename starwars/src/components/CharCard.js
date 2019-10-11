import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    width: 450px;
    height: 250px;
    background: #DAC7B5;
    border: 1px solid black;
    border-radius: 5px;
    margin: 18px 0px;
    padding: 12px;
`;
const Nameplate = styled.h2`
color: #443e3e;
text-shadow: 1px 1px 5px #fff;
`;
const Line = styled.p`
  display: flex;
  margin-left: 10px;
  font-feature-settings: "ital";
`;


const CharCard = props => {
    return(
        <Wrap>
            <Nameplate>Name: {props.info.name}</Nameplate>
            <Line>Gender: {props.info.gender}</Line>
            <Line>Height: {props.info.height}</Line>
            <Line>Hair Color:{props.info.hair_color}</Line>
            <Line>Eye Color:{props.info.eye_color}</Line>
        </Wrap>
    )
}
export default CharCard;