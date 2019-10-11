import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharCard from './CharCard';
import styled from 'styled-components';

const Box = styled.div`
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

function CharCardInfo() {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios
        .get('https://swapi.co/api/people/')
        .then(response => {
            const info = response.data.results
            setInfo(info);
            console.log(response);
        })
        .catch(error => {
            console.log('caught from response: ', error);
        })
    },[])

    return(
        <Box>
        {info.map(info => {
            return(<CharCard info={info}/>)
        }
            )}
        </Box>
    )
}
export default CharCardInfo;