import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

const CardBase = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  background: #B09B8A;
  margin-top: 4rem;
`;
const Line = styled.p`
  display: flex;
  margin-left: 10px;
`;

const App = () => {
  const [info, setInfo] = useState({})
  useEffect(() => {
    axios.get('https://swapi.co/api/people/1/')
    .then(response => {
      console.log(response);
      const infoObj = response.data
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
      <CardBase>
        <h3>{info.name}</h3>
        <Line>{info.gender}</Line>
        <Line>{info.hair_color}</Line>
        <Line>{info.eye_color}</Line>
      </CardBase>
    </div>
  );
}

export default App;
