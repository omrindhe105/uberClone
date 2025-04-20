import React from 'react'
import logo from '../assets/uberLogo.webp'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className=' w-full h-screen bg-red-400 flex justify-between flex-col bg-center bg-[url("https://img.freepik.com/free-photo/traffic-light_1150-18034.jpg?t=st=1744914755~exp=1744918355~hmac=b9cf9ce17ff0f1f591bf3ec8c7af1f3fda99de978a6f74c6d15c076b026ebaf1&w=740")] bg-cover '>
        <div className="uber-log  pl-9 pt-8">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png' alt="" className='w-18 h-auto' />
        </div>
        <div className='bg-white  px-6 py-2 text-2xl '>
            <h1 className='font-bold '>Get Started with Uber</h1>
            <Link to="/userLogin " className=' inline-block   w-full text-white bg-black px-25 py-3 rounded mt-6 mb-3 ' >Get Started</Link>
        </div>
    </div>
  )
}

export default Home