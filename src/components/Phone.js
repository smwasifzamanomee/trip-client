import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import '../styles/usermodel.css';

const Phone = ({setPhoneValue}) => {

    const [value, setValue] = useState();
    useEffect(() => {
        setPhoneValue(value)
    }, [value])
  return (

   <PhoneInput
   className='phone-input'
    international
    countryCallingCodeEditable={false}
    defaultCountry="BD"
    value={value}
    onChange={setValue}
   />
    
  )
}

export default Phone