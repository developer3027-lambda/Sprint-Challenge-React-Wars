import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SWcard from './SWcard';

function SWinfo() {

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
        <div>
        hi
        {info.map(info => {
            return(<SWcard info={info}/>)
        }
            )}
            hi
        </div>
    )
}
export default SWinfo;