import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CharCardInfo from './components/CharCardInfo';
import './App.css';

const Base = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  background: #DAC7B5;
  margin: 18px 0px;
`;
const Line = styled.p`
  display: flex;
  margin-left: 10px;
  font-feature-settings: "ital";
`;
const Nameplate = styled.h2`
color: #443e3e;
text-shadow: 1px 1px 5px #fff;
`;

const App = () => {
  const [info, setInfo] = useState({})
  useEffect(() => {
    axios.get('https://swapi.co/api/starships/')
    .then(response => {
      console.log(response);
      const infoObj = response.data.results[5]
      setInfo(infoObj)
    })
    .catch(error => {
      console.log('axios error: ',error);
    })
  },[])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Base>
        <Nameplate>{info.name}</Nameplate>
        <Line>Model: {info.model}</Line>
        <Line>length: {info.length}</Line>
        <Line>{info.manufacturer}</Line>
      </Base>
      <CharCardInfo />
    </div>
  );
}

export default App;
