import React from 'react'
import { useLocation } from 'react-router-dom'
import Axios from '../api/Axios'

const RequestId = () => {
    const location = useLocation();
    console.log(location.state);
    const handleRequestId = async( ) => {
        const res = await Axios.post('/notify-operator/', {
            id: "584d7a3c-92e4-4d4a-943d-68689af07199"
        })
        if(res.status === 200){
            alert('you have successed to notify the operator!')
        }
        else{
            alert('Invalid request id')
        }
    }

  return (
    <div>
        <button onClick={handleRequestId}>Request Id</button>
    </div>
  )
}

export default RequestId