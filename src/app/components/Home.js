import React from 'react'

const Home = () => {
  return (
<>
{/* <div className="relative w-full h-screen">

  <img src="/background.png" className="absolute inset-0 w-full h-full object-cover z-0" alt="Background" />


  <div className="relative flex justify-evenly  ">
    <div className="flex flex-col space-y-4 max-w-md">
      <button className="bg-blue-100 text-sm py-2 px-4 rounded-full">
        Exercitation
      </button>
      <p className="text-lg text-blue-800">
        Best Educational Consultancy in Patna
      </p>
      <p>
        Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    <div className=''>
      <img src="./groups.png" className="w-20 h-20" alt="Groups" />
    </div>
  </div>
</div>
  <div className=' bg-blue-800 text-white'>
    <div><p>100</p>
    <p>College</p>
    <img src='./line.png'/></div>
  
  </div> */}
  <div>
<img src='./home.png'/>
  </div>
  <div className=' bg-blue-700 text-white flex items-center justify-center p-6 gap-4'>
    <div className='flex items-center gap-4'><p>100</p>
    <p className='text-sm'>College</p>
    <img src='./line.png'/></div>
    <div className='flex items-center gap-4'><p>100</p>
    <p className='text-sm'>Courses</p>
    <img src='./line.png'/></div>
    <div className='flex items-center gap-4'><p>100</p>
    <p className='text-sm'>Exams</p>
    <img src='./line.png'/></div>
  
  </div>

  </>



  )
}

export default Home
