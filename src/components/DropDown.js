import React, { useState, useRef, useEffect } from 'react'
import '../styles/dropdown.css';


const DropDown = ({valueRef, listData, chooseValue}) => {
  
  const [value, setValue] = useState('');
  const [hide, setHide]  = useState(false);


  return (
    <div  className='dropdown' >
      <div className='dropdown-header'>
        <p ref={valueRef}>{value ? value : chooseValue}</p>
        <button  onClick={() => setHide(!hide)}>
          {!hide ? '+' : 'x'}
        </button>
      </div>
     {
      hide && <>
       <ul onClick={() => setHide(!hide)} className='dropdown-menu'>
       {
        listData.map(e => <li key={e.id} onClick={() => setValue(e.type)} >{e.type}</li>)
       }
      </ul>
      </>
     }
    </div>
  )
}

export default DropDown