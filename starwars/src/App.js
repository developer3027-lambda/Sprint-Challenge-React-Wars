import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

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
      <h2>{info.name}</h2>
    </div>
  );
}

export default App;
