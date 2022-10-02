import React from 'react'
import '../styles/inputfield.css'

const InputField = ({type, placeholder, required, name, userValue, minValue, maxValue}) => {
  return (
   
        <input min={minValue} max={maxValue} defaultValue={userValue}  required={required} name={name} className='input-field' type={type} placeholder={placeholder} />

  )
}

export default InputField;