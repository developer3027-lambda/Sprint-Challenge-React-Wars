import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import SWcard from './SWcard';

function SWinfo() {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios
        .get('https://swapi.co/api/people/')
        .then(response => {
            const info = response.data;
            setInfo(info);
            console.log(info);
        })
        .catch(error => {
            console.log('caught from response: ', error);
        })
    },[])

    return (
        <h1>Saying Hi</h1>
    )
}
export default SWinfo;