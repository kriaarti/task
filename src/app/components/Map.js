import React from 'react'

const Map = () => {
  return (
    <>
    <div className='p-4 ml-20 mr-20'>
    <div className='flex items-center gap-10'>
      <p> Study Abroad</p>
      <img src='./flight.png' className='w-10 h-10'/>
    </div>
    <div className='p-10'>
    <img src='./map.png'/>
    </div>

    </div>
    <div className='flex items-center justify-center p-5'>
  <div className=' text-sm flex items-center justify-between'>
  <button className="outline outline-1 outline-black p-2 rounded-sm">Explore All Countries</button>
  </div>
  </div>
</>
  )
}

export default Map
