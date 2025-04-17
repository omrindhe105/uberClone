import React from 'react'
import logo from '../assets/uberLogo.webp'


function Home() {
  return (
    <div className=' w-full h-screen bg-red-400 flex justify-between flex-col '>
        <div className="uber-log  pl-9 pt-8">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png' alt="" className='w-18 h-auto' />
        </div>
        <div className='bg-white px-5 py-2 text-2xl '>
            <h1 className='font-bold'>Get Started with Uber</h1>
            <button type="button" className='w-full text-white bg-black p-3 rounded mt-10 mb-3  '>Get Started</button>
        </div>
    </div>
  )
}

export default Home