import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Axios from '../api/Axios';

const AllTrip = () => {
    
    const [trip, setTrip] = useState([]);
//     const xhr = new XMLHttpRequest();

//    useEffect(() => {
//     xhr.open('GET', 'http://cc00-103-7-249-41.ngrok.io/api/v1/all-trips/');

//     xhr.onload = () => {
//         let data = xhr.response;
//         setTrip(JSON.parse(data))
//     }
//     xhr.onerror = () => {
//         console.log('error');
//     }
//     xhr.send();
//     console.log(trip);

//    }, [])


//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         const res = await axios.get('http://cc00-103-7-249-41.ngrok.io/api/v1/all-trips/');
//     //         console.log(res.data);
//     //     }
//     //     fetchData();
//     // }, [])


    const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
    };


    useEffect(() => {
        Axios.get('/all-trips').
        then((response) => {
            setTrip(response.data);
        });
    }, []);

    console.log(trip);

  return (
    <div>
        <h1>{trip.title}</h1>
    </div>
  )
}

export default AllTrip