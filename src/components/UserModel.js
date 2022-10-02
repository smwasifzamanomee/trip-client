import React, { useEffect, useState } from 'react';
import InputFiled from '../reuse/InputField';
import '../styles/usermodel.css'
import Button from '../reuse/Button';
import { useNavigate } from 'react-router-dom';
import Phone from './Phone';


const UserModel = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({});
  const [phoneValue, setPhoneValue] = useState();

  // Get data from localstorage
   useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user-model'));
     setUserData(user);
     }, [])
    
    const handleUserModel = (e) => {
      e.preventDefault();

      // Condition
      if(!phoneValue) return alert('phone number is required!')

      // User model
      const userModel = {
        fullname: e.target.fullname.value,
        email: e.target.email.value,
        phone: phoneValue,
        address: e.target.address.value
      }

      //  localstorage set 
       window.localStorage.setItem('user-model', JSON.stringify(userModel))
        navigate('/trip-request', {state: userModel})
           
   }



  return (
    <section className='user-model'>
    <form onSubmit={handleUserModel} className='user-model-form'>
    <h1 className='user-heading'>Provide your <span className='user-extra-heading'>credential</span></h1>
      <div className='user-info'>
    <InputFiled userValue={userData?.fullname} name='fullname' required={true}  type='text' placeholder='FullName'/>  
    <InputFiled userValue={userData?.email} name='email' required={true}  type='email' placeholder='Email'/>
    {/* <InputFiled userValue={userData?.phone} name='phone' required={true} type='tel' placeholder='Phone'/>   */}
    <Phone setPhoneValue={setPhoneValue}/>
    <InputFiled userValue={userData?.address}  name='address' required={true} type='text ' placeholder='Address'/>
    <Button type={'submit'}>Next</Button>
</div>
    </form>
    </section>
  )
}

export default UserModel