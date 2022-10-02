import React, { useEffect, useRef, useState } from 'react';
import '../styles/form.css';
import Button from '../reuse/Button';
import InputFiled from '../reuse/InputField';
import { json, useLocation, useNavigate } from 'react-router-dom';
import DropDown from './DropDown';
import CalenderDate from './Calender';
import TimeData from '../json/TimeData.json';
import VehicleType from '../json/VehicleType.json';
// import axios from 'axios';
import Axios from '../api/Axios';



const TripRequest = () => {
  const location = useLocation();
  const vehicleValue = useRef('');
  const dateValue = useRef('');
  const navigate = useNavigate();
  const [date, setDate] = useState(null);
  const [dt, setDt] = useState()

  console.log(location.state);

useEffect(() => {
  const dateTimeFormatter = () =>{
    const dateTime = date?.slice(0, 10)
      const dateFormat = dateTime?.split("/")
      setDt(dateFormat?.reverse()?.join('-'))
  }
  dateTimeFormatter()
},[])

console.log(dt);

  const handleTripRequest = async (e) => {
    await e.preventDefault();




    const tripCrendial = {
      trip_data: {
        full_name: location?.state?.fullname,
        email: location?.state?.email,
        phone: location?.state?.phone,
        address: location?.state?.address,
        web_url: 'https://stackoverflow.com/questions/53434094/django-rest-framework-how-to-post-date-field',
        vehicle_type: vehicleValue.current.outerText,
        number_of_people: e.target.number_of_people.value,
        luggage: e.target.luggage.value,
        max_weight: e.target.max_weight.value,
        child_seat: e.target.child_seat.value,
        pickup_point: e.target.pickup_point.value,
        destination:  e.target.destination.value,
        date: dt,
        pickup_time: '10:45',
		    // drop_time: date?.slice(33, 41)
           
  
      },
      stops:[
        'cummilla',
        'jessore'
      ]
    }

  //  const test = {
  //       trip_data: {
  //       full_name: "Tasnia Shifa ",
  //       email: "rokyyy@gmail.com",
  //       phone: "016200317235",
  //       address: "Dhaka",
  //       web_url: "https://stackoverflow.com/questions/53434094/django-rest-framework-how-to-post-date-field",
  //       vehicle_type: "ac",
  //       number_of_people: "2",
  //       luggage: "6",
  //       max_weight: "120",
  //       child_seat: "1",
  //       pickup_point: "dhaka",
  //       destination: "chittagong",
  //       date: "2015-02-11",
  //       pickup_time: "10:50",
  //       drop_time: "12:00"
  //     },
  //     stops: [
  //       "cummila",
  //       "barishal"
  //     ]
  //   }

    // console.log(tripCrendial);

    // const res = await Axios.post('/request-trip/',{test})
    // console.log(res);

    const res = await fetch('http://178.62.196.98:8000/api/v1/request-trip/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(tripCrendial)
    })
    const data = await res.json();
    if(data){
      navigate('/request-id', {state: data.trip_request_id})
    }


  }
  



  return (
    <section className='form-container'>
<form onSubmit={handleTripRequest} className='form form-trip'>
      <h1 className='trip-heading'>Let's <span className='extra-heading'>Create</span> Trip for <br/> your new <span className='extra-heading'>Vacation</span> </h1>
      <div className='form-content'>
<DropDown listData={VehicleType} valueRef={vehicleValue} chooseValue={'Choose a vehicle'}/>
<CalenderDate onchangehandle={setDate} />

<InputFiled minValue={1} maxValue={5} required={true} name='number_of_people' type='number' placeholder='Number of people'/>
<InputFiled minValue={0} maxValue={4}  name='child_seat' type='number' placeholder='child_seat'/>  
<InputFiled minValue={0} maxValue={2}  name='luggage' type='number' placeholder='Luggage'/>  
<InputFiled minValue={0} maxValue={40}  name='max_weight' type='number' placeholder='Maximum weight 40kg'/> 
<InputFiled required={true} name='pickup_point' type='text ' placeholder='Pick up point'/>
<InputFiled required={true} name='destination' type='text ' placeholder='Destination'/>

{/* <InputFiled required={true} name='stops' type='text ' placeholder='Stops'/> */}
      </div>
<Button type='submit' >Trip Request</Button>
</form>
</section>
  )
}

export default TripRequest


  // const tripCrendial =  {
  //    trip_data : {
  //      full_name : "makia Zaman ",
  //      email : "arfandfrrky0@gmail.com",
  //      phone : "01346758575",
  //      address : "Dhaka",
  //      web_url : "https://stackoverflow.com/questions/53434094/django-rest-framework-how-to-post-date-field",
  //      vehicle_type : "ac",
  //      number_of_people : "2",
  //      luggage : "6",
  //      max_weight : "120",
  //      child_seat : "1",
  //       pickup_point: "dhaka",
  //       destination: "chittagong",
  //       date: "2015-02-11",
  //       pickup_time: "10:50"
  //     },
  //     stops: [
  //       "cummila",
  //       "barishal"
  //     ]
  //   }
    