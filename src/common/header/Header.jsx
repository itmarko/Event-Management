import React from 'react'

const Header=()=> {
  return (
    <>
      <header className=" border-gray-300  bg-[#334155] items-center justify-between w-full">
        <div className=" text-white  flex  items-center justify-between justify-items-end w-[92%] mx-auto p-5 space-x-4">
          <div className=''>
            <img className='h-10' src="https://img.freepik.com/free-vector/phoenix-logo-concept_23-2148481929.jpg?w=740&t=st=1698338169~exp=1698338769~hmac=b3889bad2388f7c89720a1fcb928ae26815d3298ef19c55eafad024de39a87f6" alt="jpeg/png" />
          </div>
          <div className=''>
            <input className=' p-2 rounded-md outline-none  text-gray-500 border placeholder:text-gray-400 w-96 border-none ' type="text" placeholder='Search for Event Sports Movies And Activities'/>
          </div>

        
          <div className='justify-self-stretch'>
            navigation
          </div>
          <div className=''>
              <button className='bg-[#ed5858] text-white px-3 py-1 rounded-full hover:bg-[#7f1d1d]'
              >Sign in</button>
          </div>
        </div>
      </header>
        <div className="p-2 flex bg-[#1e293b] text-white items-center">
          <nav className='flex justify-between items-center  w-full '>
            <ul className='mx-28 px-6 space-x-3 flex  text-lg'>
              <li className='hover:text-green-400'><a href="/">Event</a></li>
              <li className='hover:text-green-400'><a href="/">Movies</a></li>
              <li className='hover:text-green-400'><a href="/">Sport</a></li>
              <li className='hover:text-green-400'><a href="/">Activities</a></li>
              <li className='hover:text-green-400'><a href="/">Fest</a></li>
            </ul>
          </nav>
        </div>
    </>
  )
}
export default Header;
