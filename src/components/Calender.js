import React, { useState } from 'react'
import { Datepicker } from '@mobiscroll/react';
import "@mobiscroll/react/dist/css/mobiscroll.min.css";


const CalenderDate = ({onchangehandle}) => {

      const [hide, setHide] = useState(false);
      const [date, setDate] = useState(null);

      const handleValue = async (e) => {
        await onchangehandle(e.valueText);
         setDate(e.valueText)
        //  console.log(e.valueText);
      }

  return (
<div className='calender-container' style={{ display: 'flex', flexFlow: 'column nowrap' }}>
    <div className='calender-header'>
        <p>{date ? `start ${date.slice(0, 19)} 
         end: ${date.slice(23, 40)}`: 'dd/mm/yyyy'}</p>
        <button  onClick={() => setHide(!hide)}>
            {!hide ? '+' : 'x'}
        </button>
    </div>
    <div  className='calendar-content'>
{
    hide &&  <Datepicker 
    controls={['calendar', 'timegrid']}
    select="range"
    display="inline"
    touchUi={true}
    onChange={handleValue}
/>
}
    </div>
</div>
  )
}

export default CalenderDate