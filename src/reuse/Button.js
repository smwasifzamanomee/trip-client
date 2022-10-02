import React from 'react';
import '../styles/button.css';

const Button = ({children,  type, onClickHandle}) => {
  return (
    <button onClick={onClickHandle} type={type} className='btn'>
        {children}
    </button>
  )
}

export default Button