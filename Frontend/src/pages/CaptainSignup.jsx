import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function CaptainSignup() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicle, setvehicle] = useState('');
  const [userData , setUserData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();


    setUserData({
     fullName:{
      firstName:firstName,
      lastName : lastName,
     },
      email:email,
      password:password,
    
    })
 
    setfirstName("")
    setLastName("");
    setemail("");
    setpassword("");

    
  
   
  };
  useEffect(() => {
    console.log(userData);
  }, [userData]);
  return (
    <div className='p-6 flex flex-col justify-between h-screen'>
      <div>
        <div className="uber-log mb-6">
          <img src='https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png' alt="uber-captain-logo" className='w-35 h-auto' />
        </div>
        <form  className='flex flex-col gap-2 w-full' onSubmit={handleSubmit}>
        <h2 className='text-lg font-medium mt-4 mb-1'>What's your name</h2>
          <div className='flex  w-full  gap-1 '>
         
            <input
              className='bg-[#e3e3e3] py-2 px-2 mb-2  rounded w-1/2'
              type="string"
              name="FirstName"
              required
              placeholder='First name'
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />

           
            <input
              className='bg-[#e3e3e3] py-2 px-2 mb-2  rounded w-1/2'
              type="string"
              name="lastName"
              required
              placeholder='Last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />




          </div>
         
            <h2 className='text-lg font-medium mt-4 mb-1'> What's your email</h2>
            <input
              className='bg-[#e3e3e3] py-2 mb-2 px-2  rounded w-full'
              type="email"
              name="email"
              required
              placeholder='Your email'
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
         
         
            <h2 className='text-lg font-medium mt-4 mb-1'> What's your password</h2>
            <input
              className='bg-[#e3e3e3] py-2 px-2 mb-2  rounded w-full'
              type="password"
              name="password"
              required
              placeholder='Your password'
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
   
          {/* <div className='flex flex-col w-1/2'>
            <h2 className='text-lg font-medium mt-4 mb-1'>Vehicle Color</h2>
            <input
              className='bg-[#eeeeee] py-2 mb-2 border rounded w-full'
              type="string"
              name="Vehicle-Color"
              required
              placeholder='Vehicle color'
              value={vehicle.color}
              onChange={(e) => setvehicle({ ...vehicle, color: e.target.value })}
            />
          </div>
          <div className='flex flex-col w-1/2'>
            <h2 className='text-lg font-medium mt-4 mb-1'>Vehicle PlateNumber</h2>
            <input
              className='bg-[#eeeeee] py-2 mb-2 border rounded w-full'
              type="string"
              name="plateNumber"
              required
              placeholder='Plate number'
              value={vehicle.plateNumber}
              onChange={(e) => setvehicle({ ...vehicle, plateNumber: e.target.value })}
            />
          </div>
          <div className='flex flex-col w-1/2'>
            <h2 className='text-lg font-medium mt-4 mb-1'>Vehicle Capacity</h2>
            <input
              className='bg-[#eeeeee] py-2 mb-2 border rounded w-full'
              type="string"
              name="capacity"
              required
              placeholder='Vehicle capacity'
              value={vehicle.capacity}
              onChange={(e) => setvehicle({ ...vehicle, capacity: e.target.value })}
            />
          </div> */}
          <div className='flex flex-col w-full'>
            <button type="submit" className='bg-black text-white px-2 py-2 mt-4 border rounded w-full text-xl font-semibold'>Register</button>
          </div>
        </form>
        <p className='text-center text-sm text-gray-600 mt-4 '>Already have an account? <Link to="/CaptainLogin" className='text-blue-500'>login here</Link></p>
      </div>
      <p className='text-[#363643] text-xs'>
      By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.
      </p>
    </div>
  );
}

export default CaptainSignup