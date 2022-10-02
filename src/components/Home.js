import React from 'react'
import '../styles/home.css';
import { Link } from 'react-router-dom';
import Button from '../reuse/Button';

const Home = () => {


  return (
    <section className='container'>
        <div className='opacity'></div>
        <div className='content'>

            <h1 className='heading'>
                <span className='span'>HEY, TRAVELLER!</span>
                Let's Enjoy Your Dream Vacation.
            </h1>
            <Link to='/user-model'>
            <Button>Let's Go</Button>
            </Link>
        </div>
    </section>
  )
}

export default Home