import React ,{useState} from 'react';
import { Link } from 'react-router-dom';


function CaptainLogin() {
  const [email, setemail] = useState('');
   const [password, setpassword] = useState('');
  return (
    <div className=' p-7 flex flex-col justify-between h-screen '>
    <div>
      <div className="uber-log  mb-8 ">
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png' alt="" className='w-18 h-auto' />
      </div>
      <form action="/userLogin" method="post">
        <h2 className=' text-lg font-medium mt-4 mb-1'>What's your Email</h2>
        <input
          className=' bg-[#eeeeee] px-2 py-2 mb-2 border rounded  w-full'
          type="email"
          name="email"
          required
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />

        <h2 className='text-lg font-medium  mt-4 mb-1'> Enter Password</h2>
        <input
          className=' bg-[#eeeeee] px-2 py-2 mb-2 border rounded  w-full'
          type="password"
          name="password"
          required
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        <button type="submit" className=' bg-black text-white px-2 py-2 mt-4 border rounded  w-full text-xl font-semibold'>Login</button>

      </form>
      <p className='text-center text-sm text-gray-600 mt-4 '>Don't have an account? <Link to="/CaptainSignup" className='text-blue-500'>Sign Up</Link></p>
    </div>
    <div>
            <Link to='/CaptainLogin' className=' flex justify-center bg-[#f39c12] text-black px-2 py-2 mt-4 rounded  w-full text-xl font-semibold'> sign as User </Link>
    
    
          </div>
   
  </div>
  )
}

export default CaptainLogin